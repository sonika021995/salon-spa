'use strict';

const student = {
	name: 'Paarsh Infotech',
	Address: 'Mumbai naka',
	mobile: 9876573241,
	age: 19,
	canVote: function() {
		console.log(this.age);
		return this.age >= 18
	}
};