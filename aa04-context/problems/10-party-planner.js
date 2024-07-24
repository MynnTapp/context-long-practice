// Your code here 

class PartyPlanner {
	constructor(guestList = []) {
		this.guestList = guestList;
	}
	addToGuestList(name) {
		this.guestList.push(name);
	}
	throwParty() {
		if (this.guestList.length === 0) {
			return "Gotta add people to the guest list";
		} else {
			return `Welcome to the party ${this.guestList.join(" and ")}`;
		}
	}
}

// const party1 = new PartyPlanner();
// party1.addToGuestList(`John`);
// console.log(party1.throwParty());

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
