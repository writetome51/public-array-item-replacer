import { errorIfNotFunction } from 'basic-data-handling/errorIfNotFunction';
import { IAdjacentToValueInfo } from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';
import { PublicArrayContainer } from '@writetome51/public-array-container';
import { replaceAdjacentAt } from '@writetome51/array-replace-adjacent-at';
import { replaceBetween } from '@writetome51/array-replace-between';
import { replaceAllOf, replaceAllOfEach, replaceFirstOf, replaceFirstOfEach }
	from '@writetome51/array-replace-first-of-all-of';
import { replaceAdjacentToValue } from '@writetome51/array-replace-adjacent-to-value';
import { replaceAt } from '@writetome51/array-replace-at';


export class PublicArrayReplacer extends PublicArrayContainer {


	constructor(data = []) {
		super(data);
	}


	// These functions all modify the array and return the class instance.


	// Replaces item at index with newValue.  index can be negative or positive.

	at(index, newValue): this {
		return this.returnThis_after(replaceAt(index, newValue, this.data));
	}


	// Replaces adjacent items beginning at startingIndex with newValues.  
	// Number of adjacent items that are replaced is same as number of items in newValues.
	// startingIndex can be negative or positive.

	adjacentAt(startingIndex, newValues: any[]): this {
		return this.returnThis_after(replaceAdjacentAt(startingIndex, newValues, this.data));
	}


	adjacentToValue(info: IAdjacentToValueInfo, newValues: any[]): this {
		return this.returnThis_after(replaceAdjacentToValue(info, newValues, this.data));
	}
	/********
	 Explanation of adjacentToValue(info: IAdjacentToValueInfo, newValues: any[]): this
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

	 *********/


	// Replaces everything between numItemsToKeepAtEachEnd with newValues.
	// Example: if array is [1,2,3,4,5,6,7] , and you call .between(2, [9,10])
	// the result will be [1,2,9,10,6,7] .  It preserves the first 2 items and the last 2.

	between(numItemsToKeepAtEachEnd, newValues: any[]): this {
		return this.returnThis_after(replaceBetween(numItemsToKeepAtEachEnd, newValues, this.data));
	}


	// Replaces first instance of value with newValue.

	firstOf(value, newValue): this {
		return this.returnThis_after(replaceFirstOf(value, newValue, this.data));
	}


	// First instance of values[i] found in array gets replaced with newValues[i].

	firstOfEach(values: any[], newValues: any[]): this {
		return this.returnThis_after(replaceFirstOfEach(values, newValues, this.data));
	}


	// Replaces all instances of value with newValue.

	allOf(value, newValue): this {
		return this.returnThis_after(replaceAllOf(value, newValue, this.data));
	}


	// All instances of values[i] found in array get replaced with newValues[i].

	allOfEach(values: any[], newValues: any[]): this {
		return this.returnThis_after(replaceAllOfEach(values, newValues, this.data));
	}


	// Loops thru array, passing each item into replacementFunction.
	// replacementFunction signature:  function(item, index?, array?): any
	// replacementFunction must return the new value you want to give to that index in the array.

	each(replacementFunction: (item, index?, array?) => any): this {
		errorIfNotFunction(replacementFunction);
		let index = -1;
		while (++index < this.data.length) {
			this.data[index] = replacementFunction(this.data[index], index, this.data);
		}
		return this;
	}


	// Replaces all instances of each value in values with a single newValue.

	allWithOne(values: any[], newValue): this {
		let newValueCopies = new Array(values.length);
		// @ts-ignore
		newValueCopies.fill(newValue);
		return this.allOfEach(values, newValueCopies);
	}


}
