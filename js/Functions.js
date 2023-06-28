'use strict';

// sayHi('Javascript');
// Method 1
/*
function sayHi(name) { // has global access
	console.log('Hello '+ name);
	// console.log(`Hello ${name}`);
}
*/

// Method 2
/*
const sayHi = function(name) { // can be accessed bellow defination
	console.log('Hello '+ name);
	// console.log(`Hello ${name}`);
}
*/

const sayHi = (name) => { // can be accessed bellow defination
	console.log(`Hello ${name}`);
}


// constructor function
function Student(name, Address, mobile, age = 19) {

	this.name = name;
	this.Address = Address;
	this.mobile = mobile;
	
	this.setAge = (num) => {
		age = num;
	}
	this.getAge = () => {
		return age;
	}
	
	this.canVote = function() {
		return age >= 18;
	}
}