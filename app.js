// 'async' allows using 'await' inside of it
async function hello() {
    // return await Promise.resolve("Hello");
    return greeting = await Promise.resolve("Hello"); // whatever, async function always return 'Promise'
};

// hello().then((msg) => { console.log(msg) });
hello().then(console.log);

//TODO: require('util').promisify()