const addToBatch = (a,b) => {
  if (a.length >= 5){
    return a;
  }
  new_array = a.concat(b);
  return new_array;
}

module.exports = addToBatch;