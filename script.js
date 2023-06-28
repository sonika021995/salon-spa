let name = 'Sonika';
let address = `Hello
Welcome             
	this is tabbed line`;
const staff = [
	'Saad',
	'Irfan'
];
const staffObj = {
	name: 'Saad',
	age: 21
};
/*
function sayHello(name) {
	return 'Hello ' + name;
}
*/
let i = 30;

/*
// Data types
Number
String
Object/Array
undefined
null
NaN
function
boolean
*/

/*
#Loops
for (let i = 0; i < 20; i++) {
	console.log(i)
}

while (i < 30) {
	console.log(i)
	i++;
}

for (key in staffObj) {
	console.log(key)
}
for (el of staff) {
	console.log(el)
}
*/

// #1 Conditional statements
/*
if (i == 20) {
	console.log('i is '+ i);
} else if (i > 30) {
	console.log('i is greater than 30');
} else if (i > 20) {
	console.log('i is greater than 20');
} else {
	console.log('i is less than 20');
}

switch (i) {
	case 20:
		console.log('i is 20');
		break;
	case 30:
		console.log('i is 30');
		break;
	case 10:
		console.log('i is 10');
		break;
	default:
		console.log('i is ' + i);
		break;
}
*/

// Element Selectors
/*
let logo = document.getElementsByClassName('logo')
let logo = document.getElementsByTagName('html')
let logo = document.getElementsByName('email')
let logo = document.getElementById('someId')

document.querySelector('.logo') // returns single Element
document.querySelectorAl('') // returns array/NodeList of Elements

*/

/*
// For Single Element
const dropdown = document.querySelector('.dropdown');

// dropdown.addEventListener('eventName', callbackFunction) // syntax to add event listener

dropdown.addEventListener('click', function(){
	// this.querySelector('') // if want to select something in .dropdown;
	let classes = this.classList
	
	if (classes.contains('show')) {
		classes.remove('show');
	} else {
		classes.add('show');
	}
})

*/

// For Multiple Elements

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(function(dropdown) {
	dropdown.addEventListener('click', function(event){
		// this.querySelector('') // if want to select something in .dropdown;
		let classes = this.classList
		
		if (classes.contains('show')) {
			classes.remove('show');
		} else {
			classes.add('show');
		}
	})
});

document.onclick = function(event) {
	console.log(event);
	if (!event.target.closest('.dropdown')) {
		const openedDropdowns = document.querySelectorAll('.dropdown.show');
		openedDropdowns.forEach(function(dropdown) {
			dropdown.classList.remove('show');
		});
	}
}