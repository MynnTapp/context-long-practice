class Dog {
  constructor(name, speak, changeName) {
    this.name = name;
    this.speak = speak;
    this.changeName = changeName;
  }
  static makeJet() {
    const dog = new Dog(
      "Jet",
      function (word) {
        return `${this.name} says ${word}`;
      },
      function (newName) {
        this.name = newName;
      }
    );
    return dog;
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = Dog;
} catch {
  module.exports = null;
}
