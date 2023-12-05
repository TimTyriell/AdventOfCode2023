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
};

function partOne(filename) {
    const inputArray = fs.readFileSync(filename, { encoding: 'utf-8' }).trim().split('\r\n');
    return convertWrittenDigits(inputArray)
        .map(extractFirstAndLastNumber)
        .reduce((a, b) => a + b, 0);
}

function convertWrittenDigits(inputArray) {
    return inputArray.map(line => {
        for (const [word, number] of Object.entries(wordToNumberMap)) {
            const regex = new RegExp(word, 'gi');
            line = line.replace(regex, number);
        }
        return line;
    });
}

function extractFirstAndLastNumber(line) {
    const numbers = line.match(/\d/g);
    return Number(numbers[0] + numbers[numbers.length - 1]);
}

console.log(partOne('./input.txt'));