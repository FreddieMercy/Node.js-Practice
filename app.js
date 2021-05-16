const { readFileSync, writeFileSync } = require('fs')

//const fs= require('fs')

//fs.readFileSync
//fs.writeFileSync

const first = readFileSync('./data/first.txt', 'utf8')
const second = readFileSync('./data/second.txt', 'utf8')

console.log(first, second)

writeFileSync('./data/result.txt', `Here is the result : ${first} , ${second}`, { flag: 'a' })