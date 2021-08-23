
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if(!matrix || 0 === matrix.length){
    return result;
  }
  else{
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      let x = i % 2 === 0
      ? j
      : (matrix[i].length - j - 1)
      result.push(matrix[i][x]);
    }
  }
}
  return result;
}
