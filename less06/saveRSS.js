/*
Написать приложение, которое будет запрашивать RSS рассылку, 
парсить XML и сохранять документы в БД.
*/
const http = require('http');
const iconv = require('iconv-lite');
const cheerio = require('cheerio');

const MongoClient = require('mongodb').MongoClient;

const urlRSS = 'http://rss.garant.ru/news/';

http.get(urlRSS, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
   var message = iconv.encode(iconv.decode(chunk, "cp1251"), "utf8").toString();
   data += message;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    //console.log( parser(data));
	saveRSS(parser(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

const parser = function(body){
	const rec = {};
	const root = "channel",
	      headers = "title, link, description, pubDate",
		  itemTagNames = "title, link, description, pubDate, guid, category ",
		  itemImgs = "enclosure",
		  itemName = "item";
		  
	$ = cheerio.load(body,{xmlMode: true});
	
	headers.split(",").map(( x,i,arr) => {
		rec[ x ] = $( root + " > " + x).text();
		//console.log(root, x, rec[ x ]  );
	});
	
	let itemTags = itemTagNames.split(",");
//	console.log( itemTags );
    var items = [];
    $( root + " > " + itemName).each(function(){
		var self = this;
		let itm = {};
		itm = itemTags.reduce(  (itm, x, idx, arr)=>{
			 itm[x] =  $( x ,self).text();
			 return itm;
		 }, itm);
		//console.log(itm);
	  items.push(itm); 	
    });
	rec["items"] = items;
	//console.log(rec);
	return rec;
}


function saveRSS(article){
	
//	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("myOTUS");
	  
	  dbo.collection("RSS").insertOne(article, function(err, res) {
		if (err) throw err;
		console.log("1 RSS article inserted");
		db.close();
	  });
	});
	
	
}
