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

// Complete the sockMerchant function below.
function sockMerchant(n, arr) {
    let totalPairs = 0;
    var pairs = arr.filter((item, pos) => arr.indexOf(item) ==pos).map((x) => arr.filter((y) => x ==y))

    for(let i = 0; i < pairs.length; i++){
        if(pairs[i].length >= 2)
            totalPairs += Math.floor(pairs[i].length/2)
    }   
    return totalPairs;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}

function mainCustom() {

    const n = 9;

    const ar = '10 20 20 10 10 30 50 10 20'.split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    console.log(result + "\n");
}

mainCustom()