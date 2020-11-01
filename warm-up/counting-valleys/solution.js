'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    
    let seaLevel = 0;
    let countValleys = 0;
    let sameValley = false;

    for(let i=0; i <= steps; i++){
        let currentPath = path.substring(0,1);
        
        if(currentPath == "U")
            seaLevel += 1

        if(currentPath == "D")
            seaLevel -= 1            
        
        if(seaLevel < 0 && !sameValley){
            countValleys++
            sameValley = true;
        }
        
        if(seaLevel == 0)
            sameValley = false;
        
        path = path.slice(1)
    }
    return countValleys;
    
}
    

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}

function mainCustom() {

    const steps = 8;

    const path = 'UDDDUDUU'

    const result = countingValleys(steps, path);

    console.log(result + "\n");
}

mainCustom()
