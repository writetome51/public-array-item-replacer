import { errorIfNotFunction } from 'basic-data-handling/errorIfNotFunction';
import { IAdjacentToValueInfo }
	from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';
import { OpenArrayContainer } from '@writetome51/open-array-container/OpenArrayContainer';
import { replaceAdjacentAt, replaceAt }
	from '@writetome51/array-insert-replace-basic/replaceAt_replaceAdjacentAt';
import { replaceMiddle } from '@writetome51/array-insert-replace-basic/replaceMiddle';
import { replaceAllOf, replaceAllOfEach }
	from '@writetome51/array-replace-intermediate/replaceAllOf_replaceAllOfEach';
import { replaceFirstOf, replaceFirstOfEach }
	from '@writetome51/array-replace-intermediate/replaceFirstOf_replaceFirstOfEach';
import { replaceAdjacentToValue } from '@writetome51/array-replace-intermediate/replaceAdjacentToValue';


export class OpenArrayItemReplacer extends OpenArrayContainer {


	constructor(data = []) {
		super(data);
	}


	// These functions modify the array, and return the class instance.


	// index can be negative or positive.

	at(index, newValue): this {
		return this.returnThis_after(replaceAt(index, newValue, this.data));
	}


	// startingIndex can be negative or positive.

	adjacentAt(startingIndex, newValues: any[]): this {
		return this.returnThis_after(replaceAdjacentAt(startingIndex, newValues, this.data));
	}


	//  info = {
	//		value: value to search for,
	//		offset: position, relative to value, where replacing begins (can be negative or positive int),
	//		howMany: number of items to replace 
	//    }
	//  Example:
	//  array is [1,2,3,4,5,6,7,8] .
	//  let newValues = [20,30,40];
	//  this.adjacentToValue({value: 5, offset: -1, howMany: 2}, newValues);
	//  array is now [1,2,3,20,30,40,6,7,8]

	adjacentToValue(info: IAdjacentToValueInfo, newValues: any[]): this {
		return this.returnThis_after(replaceAdjacentToValue(info, newValues, this.data));
	}


	// You would use .middle() if the only parts of the array you want to leave
	// alone are an equal number of items at the beginning and end.  Decide the
	// numItemsToKeepAtEachEnd, and everything in-between will be replaced with newValues.
	// Example: if array is [1,2,3,4,5,6,7] , and you call .middle(2, [9,10])
	// the result will be [1,2,9,10,6,7] .  It preserves the first 2 items and the last 2.

	middle(numItemsToKeepAtEachEnd, newValues: any[]) {
		return this.returnThis_after(replaceMiddle(numItemsToKeepAtEachEnd, newValues, this.data));
	}


	// Replaces first instance of value.

	firstOf(value, newValue): this {
		return this.returnThis_after(replaceFirstOf(value, newValue, this.data));
	}


	firstOfEach(values: any[], newValues: any[]): this {
		return this.returnThis_after(replaceFirstOfEach(values, newValues, this.data));
	}


	// Replaces all instances of value.

	allOf(value, newValue): this {
		return this.returnThis_after(replaceAllOf(value, newValue, this.data));
	}


	// Replaces all instances of each value in values.

	allOfEach(values: any[], newValues: any[]): this {
		return this.returnThis_after(replaceAllOfEach(values, newValues, this.data));
	}


	// Loops thru array, passing each item into conversionFunction.
	// conversionFunction signature:  function(itemValue, itemIndex, entireArray){...}
	// conversionFunction must return the new value you want to give to that item.

	eachBy(conversionFunction: Function): this {
		errorIfNotFunction(conversionFunction);
		let index = -1;
		while (++index < this.data.length) {
			this.data[index] = conversionFunction(this.data[index], index, this.data);
		}
		return this;
	}


	// Replaces every single item with instance of newValue.

	allWithOne(newValue): this {
		// @ts-ignore
		return this.returnThis_after(this.data.fill(newValue));
	}


}
