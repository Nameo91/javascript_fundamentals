//Exercise 1

const printHello = () =>{
  console.log('hello');
}

setTimeout(printHello,3000);

//Exercise 2

const executeAfterDelay = (time,functionToDelay) =>{
  let new_time = time * 1000;
  return setTimeout(functionToDelay, new_time);
}
executeAfterDelay(5, printHello);