process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => {
    console.log('Chunk: ', chunk);
});

process.stdin.on('end', (chunk) => {
    console.log('------END------');
});

