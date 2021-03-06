// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Two For Loops
// function chunk(array, size) {
//     let newArray = [];
//     let temp = [];
//     for (let i = 0; i < array.length; i += size) {
//         temp = [];
//         for (let j = 0; j < size; j++) {
//             if (i + j < array.length) {
//                 temp.push(array[i + j]);
//             }
//         }
//         newArray.push(temp);
//     }

//     return newArray;
//}

// Single While Loop
function chunk(array, size) {
    let newArray = [];
    let index = 0;
    let temp = [];

    while (index < array.length) {
        temp = array.slice(index, index + size);
        newArray.push(temp);
        index += size;
    }

    return newArray;
}

module.exports = chunk;
