'use strict';
const { Readable } = require('stream');
class Reader extends Readable {
  constructor(array_of_data = [], opt = {}) {
    super(opt);
    // this._array_of_data = array_of_data ;

    // Для ограничения потока ограничимся массивом array_of_data

    this._array_of_data = array_of_data.map((x) => x * 1 + Math.random() + "");

    this.on('data', (chunk) => {
      console.log('R input data: %s :', chunk.toString());
    })
      .on('error', (err) => {
        console.log('Readable on error ', err);
      })
      .on('end', () => {
        console.log('--- Readable on end ---');
      })
  }
  _read() {
    let data = this._array_of_data.shift();
    //let data = Math.random()*30 ; 

    if (!data) {
      //сообщаем, что данные закончились
      this.push(null);
    } else {
      this.push(data);
    }
  }
}

module.exports = Reader;