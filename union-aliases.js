"use strict";
// union types
function combine(input1, input2, resultType) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + ' ' + input2.toString();
    }
    return result;
    // if (resultType === "as-number") {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
}
var combinedAges = combine(15, 28, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('15', '28', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('Anna', 'Matthews', 'as-text');
console.log(combinedNames);
