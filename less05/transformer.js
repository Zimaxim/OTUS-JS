'use strict';
const { Transform } = require('stream');

class Chunk {
    constructor(chunk) {
        let rnd = Math.random();
        console.log('T rnd = %s ', rnd);
        this.set(chunk * 1 + rnd + "");
    }
    set(chunk) {
        this._chunk = chunk;
        //  console.log('set Chunk = %s', chunk);
    }
    get() {
        return this._chunk;
    }
    addRand(x) {
        //return Math.pow(this.get(), pow);
        return Math.random() + x;
    }
}
class Transformer extends Transform {
    constructor(opt = {}) {
        super(opt);
        //console.log('\n -------- Transform in constructor');

        this.on('close', () => {
            console.log('\n------ Transform on close');
        })
            .on('drain', () => {
                console.log('\n------ Transform on drain');
            })
            .on('error', (err) => {
                console.log('\n------ Transform on error', err);
            })
            .on('finish', () => {
                console.log('\n------ Transform on finish');
            })
            .on('end', () => {
                console.log('\n------ Transform on end');
            })
            .on('pipe', () => {
                console.log('\n------ Transform on pipe');
            });
    }
    _transform(chunk, encoding, done) {
        console.log('T read/write chunk: %s', chunk);
        this.push(new Chunk(chunk));
        done();
    }



}

module.exports = Chunk;
module.exports = Transformer;
