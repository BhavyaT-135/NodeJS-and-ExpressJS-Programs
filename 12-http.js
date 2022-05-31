const http = require('http');

const server = http.createServer((req, res) => { 
    //console.log(req)
    //console.log(req.url)
    if (req.url === '/') {
        res.write('Welcome to the Home Page');
        res.end();
    }
    else if (req.url === '/about') {
        res.end('Welcome to the About Page');
    }
    else {
        res.write(
            `<h1>Oops!! Page Not Found!!</h1>
            <a href="/">Go Back</a>`
        );
        res.end();
    }
})

server.listen(5000)