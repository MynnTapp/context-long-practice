// Your code here 


class Dog {
	constructor(name, speak, changeName) {
		this.name = name;
		this.speak = speak;
		this.changeName = changeName;
	}
	static makeJet() {
		const dog = new Dog("Jet", function(word) {
			return `${this.name} says ${word}`;
		}, function(newName) {
			this.name = newName;
		});
		return dog;
	}
}

const dog1 = Dog.makeJet();
console.log(dog1.name);
console.log(dog1.speak(`hi`));


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}
