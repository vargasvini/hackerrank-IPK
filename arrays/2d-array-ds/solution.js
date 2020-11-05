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

function countHourGlasses(_arr, posX, posY){
    let resultCount = 0;
    var currPosX = 0;
    var currPosY = 0;
    for(let i = 0; i < 3; i++){
        currPosX = 0;
        currPosY = posY + i;

        for(let j = 0; j < 3; j++){
            currPosX = posX + j;
            if((i != 1 && j != 1) || i == 1)
                resultCount += _arr[currPosX][currPosY]
        }

    }
    return resultCount;    
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    var maxValue = 0;

    for(var i = 0; i < 4; i++){
        var count = 0; 
        for(var j = 0; j < 4; j++){
            count = countHourGlasses(arr, i, j)
            if(count >= maxValue || i == 0 && j == 0)
                maxValue = count;
        }
    }
    return maxValue;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}

function mainCustom() {

    let arr = Array(6);

    arr[0] = '-1 -1 0 -9 -2 -2'.split(' ').map(arrTemp => parseInt(arrTemp, 10));
    arr[1] = '-2 -1 -6 -8 -2 -5'.split(' ').map(arrTemp => parseInt(arrTemp, 10));
    arr[2] = '-1 -1 -1 -2 -3 -4'.split(' ').map(arrTemp => parseInt(arrTemp, 10));
    arr[3] = '-1 -9 -2 -4 -4 -5'.split(' ').map(arrTemp => parseInt(arrTemp, 10));
    arr[4] = '-7 -3 -3 -2 -9 -9'.split(' ').map(arrTemp => parseInt(arrTemp, 10));
    arr[5] = '-1 -3 -1 -2 -4 -5'.split(' ').map(arrTemp => parseInt(arrTemp, 10));
    
    let result = hourglassSum(arr);

    console.log(result + "\n");
}

mainCustom()
