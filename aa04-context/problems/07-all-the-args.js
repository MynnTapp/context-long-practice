function allTheArgs(func, ...args) {
  return function(...callTime) {
    return func(...args, ...callTime);
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
