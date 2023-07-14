const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to the webpage!')
    }
    else if(req.url === '/about'){
        res.end('This is a short history about us.')
    }
    else {res.end(
        `<h1>Oops</h1>
        <p>We can't find the page you were looking for!</p>
        <a href="/">click here to go back home</a>
        `
    )}
})

server.listen(5000)