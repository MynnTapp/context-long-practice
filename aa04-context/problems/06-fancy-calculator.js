// Your code here 

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

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

  const fancyCalculator = new FancyCalculator();
  
  console.log(fancyCalculator.add(9)); // Expected output: 9
  console.log(fancyCalculator.setTotal(5)); // Expected output: 5
  console.log(fancyCalculator.total); // Expected output: 5
  console.log(fancyCalculator.squared()); // Expected output: 25
  console.log(fancyCalculator.modulo(4)); // Expected output: 1
  console.log(fancyCalculator.total); // Expected output: 1
  



try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}
