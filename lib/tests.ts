import { PublicArrayReplacer } from './index';
import { arraysMatch } from '@writetome51/arrays-match';


let replace = new PublicArrayReplacer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let otherArr = replace.data;


// Test 1
let obj = replace.at(-1, '100');
if (arraysMatch(replace.data, [1, 2, 3, 4, 5, 6, 7, 8, 9, '100'])) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 1A: make sure function returned the class instance:
if (obj.className && obj.className === 'PublicArrayReplacer' &&
	arraysMatch(replace.data, obj.data)) console.log('test 1A passed');
else console.log('test 1A FAILED');


//Test 2
if (arraysMatch(replace.data, otherArr)) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 2A: test .adjacentAt and make sure function returned the class instance:
obj = replace.adjacentAt(0, [10, 20, 30, 40]);
if (arraysMatch(replace.data, [10, 20, 30, 40, 5, 6, 7, 8, 9, '100']) &&
	(obj.className && obj.className === 'PublicArrayReplacer' &&
		arraysMatch(replace.data, obj.data))) console.log('test 2A passed');
else console.log('test 2A FAILED');


//Test 2B
if (arraysMatch(replace.data, otherArr)) console.log('test 2B passed');
else console.log('test 2B FAILED');


// Test 3: test .adjacentToValue and make sure function returned the class instance:
replace.data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
otherArr = replace.data;
obj = replace.adjacentToValue({value: 4, howMany: 3, offset: 1}, [11, 12, 13]);
if (arraysMatch(replace.data, [1, 2, 3, 4, 11, 12, 13, 8, 9]) &&
	(obj.className && obj.className === 'PublicArrayReplacer' &&
		arraysMatch(replace.data, obj.data))) console.log('test 3 passed');
else console.log('test 3 FAILED');


//Test 4: make sure memory reference wasn't broken:
if (arraysMatch(replace.data, otherArr)) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5
obj = replace.between(3, ['hello', 'there']);
if (arraysMatch(replace.data, [1, 2, 3, 'hello', 'there', 13, 8, 9]) &&
	(obj.className && obj.className === 'PublicArrayReplacer' &&
		arraysMatch(replace.data, obj.data))) console.log('test 5 passed');
else console.log('test 5 FAILED');


//Test 6
if (arraysMatch(replace.data, otherArr)) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7
replace.data = [1, 2, 3, 'hello', 'there', 13, 8, 9, 3];
otherArr = replace.data;
obj = replace.firstOf(3, [1]);
if (arraysMatch(replace.data, [1, 2, [1], 'hello', 'there', 13, 8, 9, 3]) &&
	(obj.className && obj.className === 'PublicArrayReplacer' &&
		arraysMatch(replace.data, obj.data))) console.log('test 7 passed');
else console.log('test 7 FAILED');


//Test 8
if (arraysMatch(replace.data, otherArr)) console.log('test 8 passed');
else console.log('test 8 FAILED');


// Test 9
replace.data = [1, 2, 1, 3, 'hello', 'there', 2, 13, 8, 9, 3];
otherArr = replace.data;
obj = replace.firstOfEach([1, 2, 3], ['h', 'i', 'j']);
if (arraysMatch(replace.data, ['h', 'i', 1, 'j', 'hello', 'there', 2, 13, 8, 9, 3]) &&
	(obj.className && obj.className === 'PublicArrayReplacer' &&
		arraysMatch(replace.data, obj.data))) console.log('test 9 passed');
else console.log('test 9 FAILED');


//Test 10
if (arraysMatch(replace.data, otherArr)) console.log('test 10 passed');
else console.log('test 10 FAILED');


// Test 11
replace.data = [1, 2, 1, 3, 'hello', 'there', 2, 13, 8, 9, 3];
otherArr = replace.data;
obj = replace.allOf(2, '');
if (arraysMatch(replace.data, [1, '', 1, 3, 'hello', 'there', '', 13, 8, 9, 3]) &&
	(obj.className && obj.className === 'PublicArrayReplacer' &&
		arraysMatch(replace.data, obj.data))) console.log('test 11 passed');
else console.log('test 11 FAILED');


//Test 12
if (arraysMatch(replace.data, otherArr)) console.log('test 12 passed');
else console.log('test 12 FAILED');


// Test 13
replace.data = [1, 2, 1, 3, 'hello', 'there', 2, 13, 8, 9, 3];
otherArr = replace.data;
obj = replace.allOfEach([1, 2, 3], ['h', 'i', 'j']);
if (arraysMatch(replace.data, ['h', 'i', 'h', 'j', 'hello', 'there', 'i', 13, 8, 9, 'j']) &&
	(obj.className && obj.className === 'PublicArrayReplacer' &&
		arraysMatch(replace.data, obj.data))) console.log('test 13 passed');
else console.log('test 13 FAILED');


//Test 14
if (arraysMatch(replace.data, otherArr)) console.log('test 14 passed');
else console.log('test 14 FAILED');


// Test 15
replace.data = [1, 2, 1, 3, 'hello', 'there', 2, 13, 8, 9, 3];
otherArr = replace.data;
obj = replace.each((item, index, array) => {
	if (index > 5) return (item * 2);
	else return item;
});
if (arraysMatch(replace.data, [1, 2, 1, 3, 'hello', 'there', 4, 26, 16, 18, 6]) &&
	(obj.className && obj.className === 'PublicArrayReplacer' &&
		arraysMatch(replace.data, obj.data))) console.log('test 15 passed');
else console.log('test 15 FAILED');


//Test 16
if (arraysMatch(replace.data, otherArr)) console.log('test 16 passed');
else console.log('test 16 FAILED');


// Test 17
replace.data = [1, 2, 1, 3, 'hello', 'there', 2, 13, 8, 9, 3];
otherArr = replace.data;
obj = replace.allWithOne([13, 'hello', 'there'], 0);
if (arraysMatch(replace.data, [1, 2, 1, 3, 0, 0, 2, 0, 8, 9, 3]) &&
	(obj.className && obj.className === 'PublicArrayReplacer' &&
		arraysMatch(replace.data, obj.data))) console.log('test 17 passed');
else console.log('test 17 FAILED');


//Test 18
if (arraysMatch(replace.data, otherArr)) console.log('test 18 passed');
else console.log('test 18 FAILED');