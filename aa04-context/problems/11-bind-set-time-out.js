function boundFuncTimer(func, obj, delay) {
  setTimeout(func.bind(obj), delay);
}




/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;
