/*
Написать функцию promisify, которая будет работать с callback функциями библиотек Node.
Возможные callback функции:
- default - вызывается с ошибкой или результатом
- single - только с ошибкой

*/



const fs = require('fs'); 

function promisify(func, context){
	return function(){
		var args = Array.prototype.slice.call(arguments,0);  // преобразование массивоподобного объекта arguments
		
		//console.log( 'args= %o', args);
		
		return new Promise(function (resolve, reject) {
		  var cb = function (err, data) {
			if (err) {
			  reject(err);
			} else {
			  resolve(data);
			}
		  }
		  
		  return func.apply(context, args.concat([cb]));  
		});  
	}
}


// https://nodejs.org/dist/latest-v9.x/docs/api/util.html#util_custom_promisified_functions
//const readFile = util.promisify(fs.readFile);

// порядок аргументов function  (err, data)  позволяет применить одно решение на оба случая
//  - default - вызывается с ошибкой или результатом
//  - single - только с ошибкой



readFile = promisify(fs.readFile);

readFile('./message.txt', 'utf8')
    .then((text) => {
        console.log(text);
    })
    .catch((err) => {
        console.log('Error', err);
    });
	
