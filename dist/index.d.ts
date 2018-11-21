import { IAdjacentToValueInfo } from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';
import { PublicArrayContainer } from '@writetome51/public-array-container';


export declare class PublicArrayReplacer extends PublicArrayContainer {
	constructor(data?: any[]);


	adjacentAt(startingIndex: any, newValues: any[]): this;


	adjacentToValue(info: IAdjacentToValueInfo, newValues: any[]): this;
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


	between(numItemsToKeepAtEachEnd: any, newValues: any[]): this;


	firstOf(value: any, newValue: any): this;


	firstOfEach(values: any[], newValues: any[]): this;


	allOf(value: any, newValue: any): this;


	allOfEach(values: any[], newValues: any[]): this;


	eachBy(conversionFunction: (item: any, index?: any, array?: any) => any): this;


	allWithOne(values: any[], newValue: any): this;
}
