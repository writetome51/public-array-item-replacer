# PublicArrayReplacer

An array-manipulating TypeScript/JavaScript class with methods that replace   
items in the array.

## Constructor
```ts
constructor(data? = [])  // 'data' is assigned to this.data .
```

You can reset the array by accessing the class `.data` property:
```ts
this.data = [1,2,3,4];
```

## Properties
```ts
data : any[]  // the actual array

className: string (read-only)
```

## Methods
<details>
<summary>view methods</summary>

```ts
at(index, newValue): this
    // Replaces item at index with newValue.  index can be negative or positive.

adjacentAt(startingIndex, newValues: any[]): this
    // Replaces adjacent items beginning at startingIndex with newValues.
    // Number of adjacent items that are replaced is same as number of items in 
    // newValues.  startingIndex can be negative or positive.
    
between(numItemsToKeepAtEachEnd, newValues: any[]): this
    // Replaces everything between numItemsToKeepAtEachEnd with newValues.
    // Example: if this.data is [1,2,3,4,5,6,7] , and you call .between(2, [9,10])
    // this.data will be [1,2,9,10,6,7] .  It preserves the first 2 items and 
    // the last 2.
```
NOTICE:  For all the functions below, any parameter called `value` cannot be an object,  
and any parameter called `values` cannot contain an object.  
This does not include arrays. Arrays are OK, as long as they don't contain objects.
```ts
adjacentToValue(info: IAdjacentToValueInfo, newValues: any[]): this
    /**********
    Replaces adjacent items including, or near a particular value, with newValues.
    Only applies to the first instance of value found in array.
    The parameter 'info' is an object that looks like this:
    {
        value: any except object (the value to search for in the array),
        offset: integer (tells function where, in relation to value, to begin 
               selecting adjacent items to replace.  If offset is zero, the 
               selection will begin with value.)
       	howMany: integer greater than zero (it's how many adjacent items to replace)
    }
    Example:
	//  this.data is [1,2,3,4,5,6,7,8] .
	//  let newValues = [20,30,40];
	//  this.adjacentToValue({value: 5, offset: -1, howMany: 2},  newValues);
	//  this.data is now [1,2,3,20,30,40,6,7,8]
    **********/

    
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
    replacementFunction must return the new value you want to give to that item 
    in the array.  Even if you don't want to replace that item, the function 
    must return something or that item will become undefined.
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
The methods below are not important to know about in order to use this  
class.  They're inherited from [BaseClass](https://github.com/writetome51/typescript-base-class#baseclass) .
```ts
protected   _createGetterAndOrSetterForEach(
		propertyNames: string[],
		configuration: IGetterSetterConfiguration
	   ) : void
    /*********************
    Use this method when you have a bunch of properties that need getter and/or 
    setter functions that all do the same thing. You pass in an array of string 
    names of those properties, and the method attaches the same getter and/or 
    setter function to each property.
    IGetterSetterConfiguration is this object:
    {
        get_setterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => Function,
	    // get_setterFunction takes the property name as first argument and 
	    // returns the setter function.  The setter function must take one 
	    // parameter and return void.
	    
        get_getterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => Function
	    // get_getterFunction takes the property name as first argument and 
	    // returns the getter function.  The getter function must return something.
    }
    *********************/ 


protected   _returnThis_after(voidExpression: any) : this
    // voidExpression is executed, then function returns this.
    // Even if voidExpression returns something, the returned data isn't used.

protected   _errorIfPropertyHasNoValue(
                property: string, // can contain dot-notation, i.e., 'property.subproperty'
                propertyNameInError? = ''
            ) : void
    // If value of this[property] is undefined or null, it triggers fatal error:
    // `The property "${propertyNameInError}" has no value.`
```
</details>


## Usage Examples
<details>
<summary>view examples</summary>

```ts
// changing the array content:
replace.data = [1,2,3,4,5,6,7];

// replacing 3 adjacent items starting at index 2:
replace.adjacentAt(2, [6, 8, 10]); // replace.data is now [1, 2, 6, 8, 10, 6, 7]

replace.allWithOne([1,2,6,7], '?'); 
// replace.data is now ['?', '?', '?', 8, 10, '?', '?']

replace.firstOf(10, {value:10, index: 4});
// replace.data is now ['?', '?', '?', 8, {value:10, index: 4}, '?', '?']

// Replacing all question marks with zeros, then returning Array:
let arr = replace.allOf('?', 0).data;
// arr is now [0, 0, 0, 8, {value:10, index: 4}, 0, 0]
```
</details>

## Inheritance Chain

PublicArrayReplacer<--[PublicArrayContainer](https://github.com/writetome51/public-array-container#publicarraycontainer)<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)


## Installation

```bash
npm i  @writetome51/public-array-replacer
```

## Loading
```ts
// If using TypeScript:
import {PublicArrayReplacer} from '@writetome51/public-array-replacer';
// If using ES5 JavaScript:
var PublicArrayReplacer = 
        require('@writetome51/public-array-replacer').PublicArrayReplacer;
```


## License
[MIT](https://choosealicense.com/licenses/mit/)