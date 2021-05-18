const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Welcome to our home page');
    res.end();
});

server.listen(5000);

setTimeout(() => {
    console.log("have waited 20 secs, now repeatedly run the callback function");
    setInterval(() => {
        console.log("run every 1 sec");
    }, 1000)
}, 20000);

//TODO: new Promise()
//TODO: then(), catch()
//TODO: async() & await
//TODO: require('util').promisify()