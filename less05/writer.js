'use strict';
const { Writable } = require('stream');

class Writer extends Writable {
    constructor(opt = {}) {
        super(opt);

        this.on('drain', () => {
            console.log('\n------ writable on drain');
        })
            .on('error', (err) => {
                console.log('\n------ writable on error', err);
            })
            .on('finish', () => {
                console.log('\n------ writable on finish');
            });
    }
    _write(chunk, encoding, done) {

        if (typeof chunk === 'object') {
            //console.log('chunk is ...OBJECT...');
            console.log('W write chunk: %s ', chunk.get());
            //console.log('chunk = ', chunk.get(), chunk.get() +' in pow '+ chunk.get() +' = ');
        } else {
            console.log('W write chunk: %s', chunk);
        }

        done();
    }
}

module.exports = Writer;