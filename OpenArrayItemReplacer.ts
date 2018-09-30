import { OpenArrayContainer } from './OpenArrayContainer';
import { replaceAdjacentAt, replaceAt }
	from '@writetome51/array-insert-replace-basic/replaceAt_replaceAdjacentAt';
import { replaceAllOf, replaceAllOfEach }
	from '@writetome51/array-replace-intermediate/replaceAllOf_replaceAllOfEach';
import { replaceFirstOf, replaceFirstOfEach }
	from '@writetome51/array-replace-intermediate/replaceFirstOf_replaceFirstOfEach';


export class OpenArrayItemReplacer extends OpenArrayContainer {


	constructor(data = []) {
		super(data);
	}


	// These functions modify the array, and return the class instance.


	// index can be negative or positive.
	at(index, newValue): this {
		return this.returnThis_after(replaceAt(index, newValue, this.data));
	}


	// index can be negative or positive.
	adjacentAt(index, newValues: any[]): this {
		return this.returnThis_after(replaceAdjacentAt(index, newValues, this.data));
	}


	firstOf(value, newValue): this {
		return this.returnThis_after(replaceFirstOf(value, newValue, this.data));
	}


	firstOfEach(values, newValues): this {
		return this.returnThis_after(replaceFirstOfEach(values, newValues, this.data));
	}


	allOf(value, newValue): this {
		return this.returnThis_after(replaceAllOf(value, newValue, this.data));
	}


	allOfEach(values, newValues): this {
		return this.returnThis_after(replaceAllOfEach(values, newValues, this.data));
	}


	adjacentWithOne(startIndex, newValue, numItemsToReplace): this {
		// @ts-ignore
		return this.returnThis_after(this.data.fill(newValue, startIndex, startIndex + numItemsToReplace));
	}


	allWithOne(value: any): this {
		// @ts-ignore
		return this.returnThis_after(this.data.fill(value));
	}


	// numItemsToPreserveAtEachEnd is how many items at the head and tail you don't want
	// to replace.
	// Example: if array is [1,2,3,4,5,6,7] , and you call .middle(2, [9,10])
	// the result will be [1,2,9,10,6,7] .  It preserves the first 2 items and the last 2.
	middle(numItemsToPreserveAtEachEnd, values){
		return this.returnThis_after(replaceMiddle(numItemsToPreserveAtEachEnd, values, this.data));
	}


}
