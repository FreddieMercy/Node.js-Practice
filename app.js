const { createReadStream } = require('fs');
const stream = createReadStream('./data/big.txt');

stream.on('data', (result) => {
    console.log(result);
});