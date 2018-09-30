"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotFunction_1 = require("basic-data-handling/errorIfNotFunction");
var OpenArrayContainer_1 = require("@writetome51/open-array-container/OpenArrayContainer");
var replaceAt_replaceAdjacentAt_1 = require("@writetome51/array-insert-replace-basic/replaceAt_replaceAdjacentAt");
var replaceMiddle_1 = require("@writetome51/array-insert-replace-basic/replaceMiddle");
var replaceAllOf_replaceAllOfEach_1 = require("@writetome51/array-replace-intermediate/replaceAllOf_replaceAllOfEach");
var replaceFirstOf_replaceFirstOfEach_1 = require("@writetome51/array-replace-intermediate/replaceFirstOf_replaceFirstOfEach");
var replaceAdjacentToValue_1 = require("@writetome51/array-replace-intermediate/replaceAdjacentToValue");
var OpenArrayItemReplacer = /** @class */ (function (_super) {
    __extends(OpenArrayItemReplacer, _super);
    function OpenArrayItemReplacer(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    // These functions modify the array, and return the class instance.
    // index can be negative or positive.
    OpenArrayItemReplacer.prototype.at = function (index, newValue) {
        return this.returnThis_after(replaceAt_replaceAdjacentAt_1.replaceAt(index, newValue, this.data));
    };
    // startingIndex can be negative or positive.
    OpenArrayItemReplacer.prototype.adjacentAt = function (startingIndex, newValues) {
        return this.returnThis_after(replaceAt_replaceAdjacentAt_1.replaceAdjacentAt(startingIndex, newValues, this.data));
    };
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
    OpenArrayItemReplacer.prototype.adjacentToValue = function (info, newValues) {
        return this.returnThis_after(replaceAdjacentToValue_1.replaceAdjacentToValue(info, newValues, this.data));
    };
    // You would use .middle() if the only parts of the array you want to leave
    // alone are an equal number of items at the beginning and end.  Decide the
    // numItemsToKeepAtEachEnd, and everything in-between will be replaced with newValues.
    // Example: if array is [1,2,3,4,5,6,7] , and you call .middle(2, [9,10])
    // the result will be [1,2,9,10,6,7] .  It preserves the first 2 items and the last 2.
    OpenArrayItemReplacer.prototype.middle = function (numItemsToKeepAtEachEnd, newValues) {
        return this.returnThis_after(replaceMiddle_1.replaceMiddle(numItemsToKeepAtEachEnd, newValues, this.data));
    };
    // Replaces first instance of value.
    OpenArrayItemReplacer.prototype.firstOf = function (value, newValue) {
        return this.returnThis_after(replaceFirstOf_replaceFirstOfEach_1.replaceFirstOf(value, newValue, this.data));
    };
    OpenArrayItemReplacer.prototype.firstOfEach = function (values, newValues) {
        return this.returnThis_after(replaceFirstOf_replaceFirstOfEach_1.replaceFirstOfEach(values, newValues, this.data));
    };
    // Replaces all instances of value.
    OpenArrayItemReplacer.prototype.allOf = function (value, newValue) {
        return this.returnThis_after(replaceAllOf_replaceAllOfEach_1.replaceAllOf(value, newValue, this.data));
    };
    // Replaces all instances of each value in values.
    OpenArrayItemReplacer.prototype.allOfEach = function (values, newValues) {
        return this.returnThis_after(replaceAllOf_replaceAllOfEach_1.replaceAllOfEach(values, newValues, this.data));
    };
    // Loops thru array, passing each item into conversionFunction.
    // conversionFunction signature:  function(itemValue, itemIndex, entireArray){...}
    // conversionFunction must return the new value you want to give to that item.
    OpenArrayItemReplacer.prototype.eachBy = function (conversionFunction) {
        errorIfNotFunction_1.errorIfNotFunction(conversionFunction);
        var index = -1;
        while (++index < this.data.length) {
            this.data[index] = conversionFunction(this.data[index], index, this.data);
        }
        return this;
    };
    // Replaces every single item with instance of newValue.
    OpenArrayItemReplacer.prototype.allWithOne = function (newValue) {
        // @ts-ignore
        return this.returnThis_after(this.data.fill(newValue));
    };
    return OpenArrayItemReplacer;
}(OpenArrayContainer_1.OpenArrayContainer));
exports.OpenArrayItemReplacer = OpenArrayItemReplacer;
