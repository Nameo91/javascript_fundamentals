const fizzBuzz = (i) => {
  if (i % 3 === 0 && i % 5 === 0) {
    return 'FizzBuzz';
  } else if (i % 3 === 0) {
    return 'Fizz';
  } else if (i % 5 === 0){
    return 'Buzz';
  } else{
    return i;
  }
}

const fizzBuzzUntil = (n) => { 
  let i = 1

  while (i <= n) { 
    const num = fizzBuzz(i);
    console.log(num);
    i += 1;
  }
}


module.exports = fizzBuzzUntil;