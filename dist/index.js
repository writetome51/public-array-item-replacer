"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotFunction_1 = require("basic-data-handling/errorIfNotFunction");
var public_array_container_1 = require("@writetome51/public-array-container");
var array_replace_adjacent_at_1 = require("@writetome51/array-replace-adjacent-at");
var array_replace_between_1 = require("@writetome51/array-replace-between");
var array_replace_first_of_all_of_1 = require("@writetome51/array-replace-first-of-all-of");
var array_replace_adjacent_to_value_1 = require("@writetome51/array-replace-adjacent-to-value");
var array_replace_at_1 = require("@writetome51/array-replace-at");
var PublicArrayReplacer = /** @class */ (function (_super) {
    __extends(PublicArrayReplacer, _super);
    function PublicArrayReplacer(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    // These functions all modify the array and return the class instance.
    // Replaces item at index with newValue.  index can be negative or positive.
    PublicArrayReplacer.prototype.at = function (index, newValue) {
        return this._returnThis_after(array_replace_at_1.replaceAt(index, newValue, this.data));
    };
    // Replaces adjacent items beginning at startingIndex with newValues.  
    // Number of adjacent items that are replaced is same as number of items in newValues.
    // startingIndex can be negative or positive.
    PublicArrayReplacer.prototype.adjacentAt = function (startingIndex, newValues) {
        return this._returnThis_after(array_replace_adjacent_at_1.replaceAdjacentAt(startingIndex, newValues, this.data));
    };
    // Replaces everything between numItemsToKeepAtEachEnd with newValues.
    // Example: if array is [1,2,3,4,5,6,7] , and you call .between(2, [9,10])
    // the result will be [1,2,9,10,6,7] .  It preserves the first 2 items and the last 2.
    PublicArrayReplacer.prototype.between = function (numItemsToKeepAtEachEnd, newValues) {
        return this._returnThis_after(array_replace_between_1.replaceBetween(numItemsToKeepAtEachEnd, newValues, this.data));
    };
    PublicArrayReplacer.prototype.adjacentToValue = function (info, newValues) {
        return this._returnThis_after(array_replace_adjacent_to_value_1.replaceAdjacentToValue(info, newValues, this.data));
    };
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
    // Replaces first instance of value with newValue.
    PublicArrayReplacer.prototype.firstOf = function (value, newValue) {
        return this._returnThis_after(array_replace_first_of_all_of_1.replaceFirstOf(value, newValue, this.data));
    };
    // First instance of values[i] found in array gets replaced with newValues[i].
    PublicArrayReplacer.prototype.firstOfEach = function (values, newValues) {
        return this._returnThis_after(array_replace_first_of_all_of_1.replaceFirstOfEach(values, newValues, this.data));
    };
    // Replaces all instances of value with newValue.
    PublicArrayReplacer.prototype.allOf = function (value, newValue) {
        return this._returnThis_after(array_replace_first_of_all_of_1.replaceAllOf(value, newValue, this.data));
    };
    // All instances of values[i] found in array get replaced with newValues[i].
    PublicArrayReplacer.prototype.allOfEach = function (values, newValues) {
        return this._returnThis_after(array_replace_first_of_all_of_1.replaceAllOfEach(values, newValues, this.data));
    };
    // Loops thru array, passing each item into replacementFunction.
    // replacementFunction signature:  function(item, index?, array?): any
    // replacementFunction must return the new value you want to give to that index in the array.
    PublicArrayReplacer.prototype.each = function (replacementFunction) {
        errorIfNotFunction_1.errorIfNotFunction(replacementFunction);
        var index = -1;
        while (++index < this.data.length) {
            this.data[index] = replacementFunction(this.data[index], index, this.data);
        }
        return this;
    };
    // Replaces all instances of each value in values with a single newValue.
    PublicArrayReplacer.prototype.allWithOne = function (values, newValue) {
        var newValueCopies = new Array(values.length);
        // @ts-ignore
        newValueCopies.fill(newValue);
        return this.allOfEach(values, newValueCopies);
    };
    return PublicArrayReplacer;
}(public_array_container_1.PublicArrayContainer));
exports.PublicArrayReplacer = PublicArrayReplacer;
