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

const isTrue = true;

new Promise((success, fail) => {
    if (isTrue) {
        success("success")
    }
    else {
        fail("fail")
    }
}).then((message) => {
    // 'then' means success
    console.log("1. " + message)
}).then((message) => {
    // 'then' means success
    console.log("2. " + message)
}).then((message) => {
    // 'then' means success
    console.log("3. " + message)
}).then((message) => {
    // 'then' means success
    console.log("4. " + message)
}).then((message) => {
    // 'then' means success
    console.log("5. " + message)
}).then((message) => {
    // 'then' means success
    console.log("6. " + message)
}).catch((message) => {
    // 'catch' means fail
    console.log("1. " + message)
}).catch((message) => {
    // 'catch' means fail
    console.log("2. " + message)
}).catch((message) => {
    // 'catch' means fail
    console.log("3. " + message)
}).catch((message) => {
    // 'catch' means fail
    console.log("4. " + message)
}).catch((message) => {
    // 'catch' means fail
    console.log("5. " + message)
}).catch((message) => {
    // 'catch' means fail
    console.log("6. " + message)
})

// same to:

function NewPromise(success, fail) {
    if (isTrue) {
        success("success")
    }
    else {
        fail("fail")
    }
}

NewPromise((message) => {
    // success/'then'
    console.log("success. " + message)
}, (message) => {
    // fail/'catch'
    console.log("fail. " + message)
});

//TODO: async() & await
//TODO: require('util').promisify()