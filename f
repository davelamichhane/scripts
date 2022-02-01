#!/usr/bin/node

// Lookup Project Euler #254 for more info

let n = process.argv[2]

function factorial(num) {
    switch (num) {
        case 0:
            return 1;
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 6;
        case 4:
            return 24;
        case 5:
            return 120;
        case 6:
            return 720;
        case 7:
            return 5040;
        case 8:
            return 40320;
        case 9:
            return 362880;
    }
}

function split(str) {
    return str.split('').map(x => Number(x))
}

function add(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0)
}

function f(str) {
    return add(split(str).map(x => factorial(x)))
}

let ans = String(f(n))

process.stdout.write(ans + "\n")
