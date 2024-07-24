// Your code here

class Calculator {
  constructor() {
    this.total = 0;
  }

  add(num) {
    this.total += num;
    return this.total;
  }
}

class FancyCalculator extends Calculator {
  setTotal(newTotal) {
    this.total = newTotal;
    return this.total;
  }

  squared() {
    this.total *= this.total;
    return this.total;
  }

  modulo(num) {
    this.total %= num;
    return this.total;
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = FancyCalculator;
} catch {
  module.exports = null;
}
