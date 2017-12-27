var args = process.argv;
var sum = 0;

args.forEach(function(arg, index) {
    if(index > 1) {
        sum += parseInt(arg);
    }
});

console.log(sum);