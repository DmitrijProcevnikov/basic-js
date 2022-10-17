const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(n) {
  let g = [];
  let q = [];
  let s = [];
  if(n === null){
    return false;
  }
  if(n === undefined){
    return false;
  }
  for (let i = 0; i < n.length; i++){
    if(typeof n[i] === 'string'){
      g.push(n[i].trim());
    } 
  }
  if(g.length === 0){
    return false;
  }
  for(let t = 0; t < g.length; t++){
    s.push(g[t][0].toUpperCase());
   
  }
  q = s.sort();
    

  return q.join('');
}

module.exports = {
  createDreamTeam
};
