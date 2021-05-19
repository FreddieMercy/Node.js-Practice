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
    return message
}).then((message) => {
    // 'then' means success
    console.log("2. " + message)
    return message
}).then((message) => {
    // 'then' means success
    console.log("3. " + message)
    return message
}).then((message) => {
    // 'then' means success
    console.log("4. " + message)
}).then((message) => {
    // 'then' means success
    console.log("5. " + message)
    return message
}).then((message) => {
    // 'then' means success
    console.log("6. " + message)
    return message
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
}).finally((message) => {
    console.log("finally 1. " + message)
    return message
}).finally((message) => {
    console.log("finally 2. " + message)
}).finally((message) => {
    console.log("finally 3. " + message)
    return message
})

// same to:

function NewPromise(success, fail) {
    if (isTrue) {
        success("success")
    }
    else {
        fail("fail")
    }

    console.log("finally")
}

NewPromise((message) => {
    // success/'then'
    console.log("success. " + message)
}, (message) => {
    // fail/'catch'
    console.log("fail. " + message)
});
