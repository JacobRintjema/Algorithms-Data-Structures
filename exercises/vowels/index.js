// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// Using regex
// function vowels(str) {
//     return str.replace(/[^aeiou]/gi, '').length;
// }

// Using filter
function vowels(str) {
    return str.toLowerCase().split('').filter(i => 'aeiou'.includes(i)).length;
}

module.exports = vowels;
