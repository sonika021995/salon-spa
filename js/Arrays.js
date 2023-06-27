'use strict';
// Array

const arr = [20, 1, 2, 5, 3, 4, 9, 30];
const arr2 = arr;
let arr3;
try {
	arr3 = arr2.toSorted();
} catch {
	arr3 = [...arr2].sort();
}
console.log(arr3);

const arr4 = arr3.filter(function(el) {
	return el < 10;
});

console.log(arr4);

arr3.sort(function(a, b) {
	return a - b; // ascending
	//return b - a; // descending
});

console.log(arr3);

const arr5 = arr3.map(function(el) {
	return el.toString();
});

console.log(arr5);

arr3.forEach(function(another) {
	console.log(another);
});
