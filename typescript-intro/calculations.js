"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.sumNumbers = void 0;
console.log('xxx');
function sumNumbers(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
exports.sumNumbers = sumNumbers;
exports.add = (a, b) => a + b;
