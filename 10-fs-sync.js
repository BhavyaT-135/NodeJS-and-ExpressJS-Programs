const { readFileSync, writeFileSync } = require('fs');

console.log('Start')

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

writeFileSync('./content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag:'a' } 
)
//The flag : 'a' means append to the file. Otherwise, the file will be overwritten.

console.log('Done with this task')
console.log('Starting with the next task')

