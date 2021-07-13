// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars = {};

    for (let i of str) {
        if (!chars[i]) {
            chars[i] = 1;
        } else {
            chars[i]++;
        }
    }

    let largest = 0;
    let char = '';
    for (let [key, val] of Object.entries(chars)) {
        if (val > largest) {
            largest = val;
            char = key;
        }
    }

    return char;
}

module.exports = maxChar;
