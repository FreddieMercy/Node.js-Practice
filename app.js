async function hello() {
    // return await Promise.resolve("Hello");
    return greeting = await Promise.resolve("Hello"); // whatever, async function always return 'Promise'
};

hello().then(console.log);

//TODO: require('util').promisify()