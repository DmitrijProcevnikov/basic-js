const { NotImplementedError } = require('../extensions/index.js');


//   Given matrix where you have to find cats by ears "^^"
 
//   @param {Array<Array>} matrix 
//  @return {Number} count of cats found
 
//   @example
  // const m = [
  //  [0, 1, '^^'],
  //  [0, '^^', 2],
  //  ['^^', 1, 2]
  // ]
 
 
function countCats(n) {
  let sum = 0;
  for(let i = 0; i < n.length; i++){
    for(let j = 0; j < n[i].length; j++){
      if(n[i][j] === '^^'){
        sum += 1;
      }
    } 
  }return sum;
}
module.exports = {
  countCats
};
