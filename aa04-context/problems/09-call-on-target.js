function callOnTarget(func, obj1, obj2) {
  return func.call(obj1, obj2);
}


// let test1 = callOnTarget(greet, cat, mouse);
// let result1 = "I'm Breakfast. Nice to meet you, Jerry";

// let test2 = callOnTarget(greet, mouse, cat);
// let result2 = "I'm Jerry. Nice to meet you, Breakfast";

// let test3 = callOnTarget(dog.chase, cat, dog);
// let result3 = "Woof, my name is Breakfast and I'm chasing Noodles";

// console.log(assert.equal(test1, result1));
// assert.equal(test2, result2);
// assert.equal(test3, result3);

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;
