// union types

// function combine(input1: number | string, input2: number | string) {
//     let result;

//     if (typeof input1 === 'number' && typeof input2 === 'number') {
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + ' ' + input2.toString();
//     }
//         return result;
// }

//literal types
type Combinable = number | string; // type alias
type ConversionDescriptor = 'as-number' | 'as-text'; // type alias

function combine(
    input1: Combinable, 
    input2: Combinable, 
    resultType: ConversionDescriptor,
    ) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === "as-number") {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + ' ' + input2.toString();
    }
    return result;
    
    // if (resultType === "as-number") {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
}

const combinedAges = combine(15, 28, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('15', '28', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Anna', 'Matthews', 'as-text');
console.log(combinedNames);