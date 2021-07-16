// Built in Modules OS PATH FS HTTP

const os = require('os')
//console.log(os.cpus())
// Info about a current user
const user = os.userInfo()
//console.log(user)
//Method returns the system uptime in seconds
//console.log(`The system uptime is: ${os.uptime()} seconds.`)
// Creation of os type object
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOS)