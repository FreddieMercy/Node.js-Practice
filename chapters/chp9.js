const { readFile, writeFile } = require('fs')

readFile('./data/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(result);
    const first = result;
    readFile('./data/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }

        const second = result;

        console.log(result);
        writeFile('./data/result.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log(result);
        })
    })
})