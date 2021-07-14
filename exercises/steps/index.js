// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let temp = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j <= i) {
                temp += "#";
            } else {
                temp += " ";
            }
        }
        console.log(temp);
        temp = "";
    }
}

module.exports = steps;
