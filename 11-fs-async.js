const { readFile, writeFile } = require('fs')

//For async methods, we need to provide a callback function.
//The callback function will be called when the operation is complete.

console.log('Start')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
    }
    else {
        const first = result;
        readFile('./content/second.txt', 'utf8', (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log(first, result)
            }
        })
        writeFile('./content/result-async.txt', `Here is the result : ${first}, ${result}`, {flag: 'a'}, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log('File written successfully')
            }
        })
    }
})

console.log('Starting next task')