// Globals:
// __dirname - path to current directory
// __filename - file name
// require - function to use modules 
// module - info about current module 
// process - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);

setInterval(() => {
    console.log("Hello world@");
}, 1000);

const tutorial = require('./module_tutorial')
console.log(tutorial.items[0])
console.log(tutorial.Person.name)