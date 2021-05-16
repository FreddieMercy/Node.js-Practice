const { readFileSync, writeFileSync } = require('fs')
const path = require('path')

//const fs= require('fs')

//fs.readFileSync
//fs.writeFileSync

const first = readFileSync(path.resolve(__dirname, '../data/first.txt'), 'utf8')
const second = readFileSync(path.resolve(__dirname, '../data/second.txt'), 'utf8')

console.log(first, second)

writeFileSync(path.resolve(__dirname, '../data/result.txt'), `Here is the result : ${first} , ${second}`, { flag: 'a' })