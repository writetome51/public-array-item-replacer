# PublicArrayReplacer

A TypeScript/JavaScript class for replacing array items.  
All its methods modify the array and return the class instance.

## Installation

You must have npm installed first.  Then, in the command line:

```bash
npm install @writetome51/public-array-replacer
```

## Loading
```
// If using TypeScript:
import {PublicArrayReplacer} from '@writetome51/public-array-replacer';
// If using ES5 JavaScript:
var PublicArrayReplacer = require('@writetome51/public-array-replacer').PublicArrayReplacer;
```


## Public API

### Constructor
```
new PublicArrayReplacer(array = [])
```

### Properties

```
data : any[] (read-writable) // This is the array to be operated on.
```

### Methods

```
at(index, newValue): this
    // Replaces item at index with newValue.  index can be negative or positive.

adjacentAt(startingIndex, newValues: any[]): this
    // Replaces adjacent items beginning at startingIndex with newValues.
    // Number of adjacent items that are replaced is same as number of items in newValues.
    // startingIndex can be negative or positive.
    
adjacentToValue(info: IAdjacentToValueInfo, newValues: any[]): this
    /**********
    Replaces adjacent items including, or near a particular value, with newValues.
    Only applies to the first instance of value found in array.
    The parameter 'info' is an object that looks like this:
    {
        value: any except object (the value to search for in the array),
        offset: integer (tells function where, in relation to value, to begin selecting adjacent
                    	items to replace.  If offset is zero, the selection will begin with value.)
       	howMany: integer greater than zero (it's how many adjacent items to replace)
    }
    Example:
	//  array is [1,2,3,4,5,6,7,8] .
	//  let newValues = [20,30,40];
	//  this.adjacentToValue({value: 5, offset: -1, howMany: 2},  newValues);
	//  array is now [1,2,3,20,30,40,6,7,8]
    **********/

between(numItemsToKeepAtEachEnd, newValues: any[]): this
    // Replaces everything between numItemsToKeepAtEachEnd with newValues.
    // Example: if this.data is [1,2,3,4,5,6,7] , and you call .between(2, [9,10])
    // this.data will be [1,2,9,10,6,7] .  It preserves the first 2 items and the last 2.
    
firstOf(value, newValue): this
    // Replaces first instance of value with newValue.
    
firstOfEach(values: any[], newValues: any[]): this
    // First instance of values[i] found in array gets replaced with newValues[i].
    
allOf(value, newValue): this
    // Replaces all instances of value with newValue.
    
allOfEach(values: any[], newValues: any[]): this
    // All instances of values[i] found in array get replaced with newValues[i].
    
each(replacementFunction: (item, index?, array?) => any): this
    /**********
    Loops thru array, passing each item into replacementFunction.
    replacementFunction signature:  function(item, index?, array?): any
    replacementFunction must return the new value you want to give to that index in the array.
    Example:
    //  this.data is [1,2,3,4,5,6] .
    //  this.each((item) => {
    //      if (item === 2 || item === 6) return item * 3;
    //      else return item;
    //  });
    //  this.data is now [1,6,3,4,5,18]
    **********/
    
    
allWithOne(values: any[], newValue): this
    // Replaces all instances of each value in values with newValue.
```



## Usage

```
// getting an instance:
let replace = new PublicArrayReplacer([1,2,3,4,5,6,7]);

// replacing 3 adjacent items starting at index 2:
replace.adjacentAt(2, [6, 8, 10]); // replace.data is now [1, 2, 6, 8, 10, 6, 7]

replace.allWithOne([1,2,6,7], '?'); // replace.data is now ['?', '?', '?', 8, 10, '?', '?']

replace.firstOf(10, {value:10, index: 4});
// replace.data is now ['?', '?', '?', 8, {value:10, index: 4}, '?', '?']
```


## License
[MIT](https://choosealicense.com/licenses/mit/)