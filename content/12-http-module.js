//const http = require('http')
const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to your home page')
    }
    if(req.url === '/about'){
        res.end('it is a long story short')
    }
    res.end(`
    <h1>Oops!..</h1>
    <p>We cant seem to find the page you want!..</p>
    <a href="/">Back..</a>
    `)
})

server.listen(5000)


/*
const server = http.createServer((req,res) => {
    console.log(req)
    res.write('Welcome to my http server on port: 5000')
    res.end()
})

server.listen(5000)
*/