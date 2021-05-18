const http = require('http');

const server = http.createServer((req, res) => {

    console.log("Req: \n")
    console.log(req);

    if (req.url === '/') {
        res.write('Welcome to our home page');
        res.end();
        //res.end('Welcome to our home page');
    }

    if (req.url === '/about') {
        res.end('Here is our short history');
    }

    res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`);
});

server.listen(5000);

//TODO: setTimeOut, setInterval, process.nextTick()
//TODO: new Promise()
//TODO: then(), catch()
//TODO: async() & await
//TODO: require('util').promisify()