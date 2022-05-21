'use strict';

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
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    if(q.length == 1){
        return;
    }
    var auxQ = [...q];
    var totalBribes = 0;
    var chaoticBribes = 0;
    auxQ.reverse();
    for (let i = 0; i < auxQ.length; i++) {
        chaoticBribes = q[i] - (i+1);
        if(chaoticBribes >= 3){
            console.log('Too chaotic');
            return;
        }
        for (let j = i+1; j < auxQ.length; j++) {
            if(auxQ[i] < auxQ[j]){
                totalBribes++;
            }
        }
    }
    console.log(totalBribes);
    return;
}
function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const q = readLine().replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
