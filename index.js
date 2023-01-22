const http = require('http')
const server = http.createServer((req,res) =>{

    if(req.url === '/about')
       res.end('Welcome to About page')

    else if (req.url === '/contact')
           res.end('Welcome to contact page')

    else if(req.url === '/')
            res.end('home page')

    else {
           res.writeHead(486)
           res.end('This page is unavailable ryt now')
    }
//     res.end('Hey Buddy')
 });

server.listen(3000)