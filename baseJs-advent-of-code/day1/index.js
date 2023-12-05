import fs from 'fs';

function partOne(filenname) {
    const lines = fs.readFileSync(filenname, {encoding: 'utf-8'}).trim().split('\r\n');
    console.log(lines);
    const numbers = lines.map((line) => { 
        let firstNumber = line.split('').find((number) => Number.isInteger(Number(number)));
        let lastNumber = line.split('').findLast((number) => Number.isInteger(Number(number)));
        return Number(firstNumber + lastNumber);
    });
    return numbers.reduce((a, b) => a + b, 0);

}

console.log(partOne('./input.txt'));