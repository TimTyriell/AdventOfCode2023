import fs from 'fs';
const wordToNumberMap = {
    'one': 'on1ne',
    'two': 'tw2wo',
    'three': 'thre3hree',
    'four': 'fou4our',
    'five': 'fiv5ive',
    'six': 'si6ix',
    'seven': 'sev7ven',
    'eight': 'eigh8ight',
    'nine': 'nin9ine'
}

function partOne(filenname) {
    const lines = fs.readFileSync(filenname, { encoding: 'utf-8' }).trim().split('\r\n');
    console.log(lines);
    const lines2 = lines.map((line) => {
        for (let word in wordToNumberMap) {
            let regex = new RegExp(word, 'gi');
            line = line.replace(regex, wordToNumberMap[word]);
        }
        return line;
    });
    console.log(lines2);
    const numbers = lines2.map((line) => {
        let firstNumber = line.split('').find((number) => Number.isInteger(Number(number)));
        let lastNumber = line.split('').findLast((number) => Number.isInteger(Number(number)));
        return Number(firstNumber + lastNumber);
    });
    return numbers.reduce((a, b) => a + b, 0);

}

console.log(partOne('./input.txt'));