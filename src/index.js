const { stripColors } = require("colors");

module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.toString("").replace(/,/g, '').split(',').toString();
  let arrayOne = [];
  let arrayTwo = [];


  for (let i = 0; i < str.length; i++) {
    arrayOne.push(str[i])
  }

  for (let i = 0; i < brackets.length; i++) {
    arrayTwo.push(brackets[i])
  }


  for (let j = 0; j < (arrayTwo.length); j += 2) {
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] === arrayTwo[j] && arrayOne[i + 1] === arrayTwo[j + 1]) {
        arrayOne.splice(i, 2)
        i = 0; 
        j = 0;
        }
      }
    }

    for (let j = 0; j < (arrayTwo.length); j += 2) {
      for (let i = 0; i < arrayOne.length; i++) {
          if (arrayOne[i] === arrayTwo[j] && arrayOne[i + 1] === arrayTwo[j + 1]) {
          arrayOne.splice(i, 2)
          i = 0; 
          j = 0;
          }
        }
      }
      
  if (arrayOne.length !== 0) {
    return false
  } else if (arrayOne.length === 0){
    return true
  }
}
