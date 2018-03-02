let Job = require('./jobs');
let job = new Job();

job.on('done', (details) => {
    console.log('weekly job completed on: ', details.completedOn);
    job.removeAllListeners();
});

console.log('emitting event!');
job.emit('start');