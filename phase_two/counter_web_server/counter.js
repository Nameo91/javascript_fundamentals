class Counter{
  sum = 0;
  
  up() {
    this.sum += 1;
  }

  getSum() {
    return this.sum;
  }

  reset() {
    return this.sum = 0;
  }
}

module.exports = Counter;