/* 
  С помощью process.on('uncaughtException') 
  перехватить и залогировать собственный тип ошибки 
  (без использования конструктора Error, но включая стэк)
 */
var fs = require('fs');

let readFile = function (fileName) {
  fs.readFile(fileName, function (err, data) {
    if (err) throw err;
    console.log(data);
  });
}

readFile('somefile1.txt');
readFile('somefile2.txt');
readFile('somefile3.txt');


process.on('uncaughtException', function (err) {
  console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
  console.error(err.stack)
  // process.exit(1)
})
