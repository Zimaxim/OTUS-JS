
/*
Создать скрипт tree для вывода списка файлов и папок node_modules. 
Вызовы файловой системы должны быть асинхронными. 
Результатом работы должен быть объект с 2 массивами - files & folders
Добавить входной параметр - путь до папки
Добавить возможность выполнять этот скрипт через команду npm run tree -- ...
*/



var fs = require('fs');
var path = require('path');

var aDIRs = function () {
  var folders = [],
    files = [];
  function addDir(arr) {
    folders.push(arr);
  }
  function addFile(arr) {
    files.push(arr);
  }
  return {
    arrFolders: folders,
    arrFiles: files,
    pushDir: function (arr) { addDir(arr); },
    pushFile: function (arr) { addFile(arr); }
  }
}
var aPaths = new aDIRs();


var cbFnc = function (err, result) {
  if (err) console.log("ERROR: %o", err);

  console.log('\n Folders:');
  console.log(aPaths.arrFolders);

  console.log('\n Files:');
  console.log(aPaths.arrFiles);
}



var tree = function (dir, callbackFnc) {
  var results = [];



  callbackFnc = callbackFnc || cbFnc;




  fs.readdir(dir, function (err, list) {
    // 
    if (err) return callbackFnc(err);

    //console.log("callbackFnc = %s", callbackFnc);

    // Подсчет елементов в dir
    var pending = list.length;

    if (!pending) return callbackFnc(null, results);

    list.forEach(function (file) {
      file = path.resolve(dir, file);    // dir +"/"+file

      fs.stat(file, function (err, stat) {
        if (stat && stat.isDirectory()) {
          //console.log("dir = %s", file);

          aPaths.pushDir(file);

          tree(file, function (err, res) {
            results = results.concat(res);
            //console.log("pending= %s lenght = %s", pending, results.length) ;
            if (!--pending) callbackFnc(null, results);
          });
        } else {
          //console.log("file = %s", file);
          results.push(file);
          aPaths.pushFile(file);
          //console.log("pending= %s lenght = %s", pending, results.length) ;

          if (!--pending) callbackFnc(null, results);
        }
      });
    });
  });
};

var rootDir = __dirname;
console.log('__dirname= %o', __dirname);
// print process.argv
//console.log('arguments: ');
process.argv.forEach(function (val, index, array) {
  // console.log(index + ': ' + val);
  if (index == 2) {
    rootDir = val;
    console.log('rootDir : ' + val);
  }
});


tree(rootDir, cbFnc);



