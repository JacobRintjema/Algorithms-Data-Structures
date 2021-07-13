// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// String solution
function anagrams(stringA, stringB) {
    return stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('') === stringB.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

// Char Map Solution
// function anagrams(stringA, stringB) {
//     let charMapA = {};
//     let charMapB= {};

//     stringA.replace(/[^\w]/g, "");
//     stringB.replace(/[^\w]/g, "");

//     stringA.toLowerCase();
//     stringB.toLowerCase();

//     for (let i of stringA) {
//         if (!charMapA[i]) {
//             charMapA[i] = 1;
//         } else {
//             charMapA[i]++;
//         }
//     }

//     for (let i of stringB) {
//         if (!charMapB[i]) {
//             charMapB[i] = 1;
//         } else {
//             charMapB[i]++;
//         }
//     }

//     if (charMapA.length != charMapB.length) {
//         return false;
//     }

//     for (let i in charMapA) {
//         if (!charMapB[i] || (charMapA[i] != charMapB[i])) {
//             return false;
//         }
//     }

//     return true;
// }

module.exports = anagrams;
