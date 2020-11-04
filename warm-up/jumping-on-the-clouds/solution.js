'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    var count = 0;
    for(let i = 0; i <= c.length; i++){
        for(let jumps = 2; jumps > 0; jumps--) {       
            if(c[i + jumps] === 0){
                count++;
                i += jumps-1
                break;
            }
            continue;
        }
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}

function mainCustom() {

    const n = 6;

    const c = '0 0 1 0 0 1 0'.split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    console.log(result + "\n");
}

mainCustom()
