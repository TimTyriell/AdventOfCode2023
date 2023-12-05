import fs from 'fs';
const maxCubes = {
    "red": 12,
    "green": 13,
    "blue": 14
}

function partOne(filename) {
    const inputArray = fs.readFileSync(filename, { encoding: 'utf-8' }).trim().split('\r\n');
    const gameMap = new Map();
    const correctGames = [];
    let iterator = 0;
    for (const line of inputArray) {
        const [game, entries] = line.split(': ');
        const gameEntries = entries.split('; ').map(entry => entry.split(', '));
        gameMap.set(game, gameEntries);
        let isValid = true;
        for (const handfullCubes of gameEntries) {
            for (const entry of handfullCubes) {

            const [count, color] = entry.split(' ');
            if (Number(count) >  maxCubes[color]) {
                isValid = false;
                break;
            }
        }
    }
    if (isValid) {
        correctGames.push(game);
    }
    }
    
    return sumIdOfGames(correctGames);
}

function sumIdOfGames(games) {
    let sum = 0;
    for (const game of games) {
        const id = game.match(/\d+/g);
        sum += Number(id);
    }
    return sum;
}

console.log(partOne('./input.txt'));