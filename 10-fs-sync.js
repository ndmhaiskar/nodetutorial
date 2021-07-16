// fs module (file system) [synchronous(blocking) and asynchronous(nonblocking)]


const { readFileSync, writeFileSync } = require('fs')
// fs.readFileSync
// fs.writeFileSync
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log('Done the task')
//console.log(first,second)
writeFileSync('./content/result-sync.txt',
`result will contain:
 ${first}, ${second}`,{ flag:'a' })
 console.log('Starting the new task')
