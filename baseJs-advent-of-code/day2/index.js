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
    for (const line of inputArray) {
        const [game, entries] = line.split(': ');
        const gameEntries = entries.split('; ').map(entry => entry.split(', '));
        gameMap.set(game, gameEntries);
        let isValid = true;
        for (const handfullCubes of gameEntries) {
            console.log(handfullCubes);
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

function partTwo(filename) {
    const inputArray = fs.readFileSync(filename, { encoding: 'utf-8' }).trim().split('\r\n');
    const gameMap = new Map();
    let cubePower = 0;
    for (const line of inputArray) {
        const [game, entries] = line.split(': ');
        const gameEntries = entries.split('; ').map(entry => entry.split(', '));
        gameMap.set(game, gameEntries);
        let minCubes = {
            "red": 0,
            "green": 0,
            "blue": 0
        }
        for (const handfullCubes of gameEntries) {
        
            for (const entry of handfullCubes) {
                const [count, color] = entry.split(' ');
                switch (color) {
                    case "red":
                        if (Number(count) > minCubes.red) {
                            minCubes.red = Number(count);
                        } 
                        break;
                    case "green":
                        if (Number(count) > minCubes.green) {
                            minCubes.green = Number(count);
                        }
                        break;
                    case "blue": 
                        if (Number(count) > minCubes.blue) {
                            minCubes.blue = Number(count);
                        }   
                        break;   
                }
            }
        }
       
            cubePower += minCubes.red * minCubes.green * minCubes.blue
    }
    
    return cubePower;
}

console.log(partTwo('./input.txt'));