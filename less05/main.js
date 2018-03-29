/*
Написать приложение для работы со стримами: 
Readable, генерирующий случайные числа, 
Transformable, добавляющий случайное число к первому и 
Writable, выводящий в консоль данные.
Данные должны “течь” readable -> transformable -> writable
Используйте highWaterMark для примера ограничения внутреннего буффера.
*/

'use strict';
const Reader = require('./reader.js');
const Writer = require('./writer.js');
const Transformer = require('./transformer.js');



let array_of_data = ['1', '2', '3', '4', '5'];

//let  array_of_data = [1, 2, 3, 4, 5];
let r_opts = { objectMode: true };
let w_opts = {
    objectMode: true
    , highWaterMark: 1     //ограничем буфер; при таком маленьком значении каждый раз будет вызываться событие 'drain'
};
let t_opts = {
    readableObjectMode: true //читать из потока Transform будут объекты
    , writableObjectMode: false //записывать в поток Transform можно либо строки или буфер
    , decodeStrings: false
};

const R = new Reader(array_of_data, r_opts);
const W = new Writer(w_opts);
const T = new Transformer(t_opts);


function onDrain() {
    console.log('W in flowing mode'); //, R._readableState.flowing);
    T.resume();
}


function drainSwitch(data, cb) {
    console.log('drainSwitch :: data : %s ', data);

    if (!W.write(data)) {
        T.pause();
        W.once('drain', cb);
    } else {
        process.nextTick(cb);
    }
}

R.pipe(T).pipe(W);
