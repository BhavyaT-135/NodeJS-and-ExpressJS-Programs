const path = require('path')

console.log(path.sep) //seperator for path

const filePath = path.join('/content', 'subfolder', 'test.txt') // The join function joins the path elements together.
console.log(filePath)

const base = path.basename(filePath) //The basename function returns the last portion of a path.
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt') //__dirname is the current directory, i.e., the directory in which the currently executing script resides
console.log(absolute) // THe resolve function returns the absolute pathname of a path.
