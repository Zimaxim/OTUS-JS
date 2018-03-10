/*
Запустить локально тестовый Web Server
Два файла - log.js и server.js. Проект запускается командой `node server`.

Внутри server.js нужно импортировать объект log из log.js и запустить простейший web server. 
На каждый запрос к серверу на объекте log нужно триггерить событие 'request' с параметром -
объектом запроса.
*/

const http = require('http');
const Log  = require('./log');

Log.On();
//Log.logReq('request.url');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
 
});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

server.on('request', (request, response) =>{
			//console.log('URL request: %o', request.url);
			Log.Add(request.url);
		});
