let util = require('util');
let events = require('events');

let Job = function Job() {
    let job = this;

    job.process = () => {
        setTimeout(() => {
            // emulate the delay of job async
            job.emit('done', {completedOn: new Date() });
        }, 700);
    };

    job.on('start', () => {
        job.process();
    });
};

util.inherits(Job, events.EventEmitter);
module.exports = Job;