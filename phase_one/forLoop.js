const getParity = (n) => {
  if (n % 2 === 0) {
    return 'even';
  }
  else {
    return 'odd';
  }
}

for (let n = 0; 0 <= n; n++) {
  const parity = getParity(n);
  console.log(`${n} is ${parity}`);
}

