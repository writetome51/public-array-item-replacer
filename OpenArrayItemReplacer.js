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
var OpenArrayContainer_1 = require("./OpenArrayContainer");
var replaceAt_replaceAdjacentAt_1 = require("intuitive-array-handlers/modify/return_void/replaceAt_replaceAdjacentAt");
var replaceAllOf_replaceAllOfEach_1 = require("intuitive-array-handlers/modify/return_void/replaceAllOf_replaceAllOfEach");
var replaceFirstOf_replaceFirstOfEach_1 = require("intuitive-array-handlers/modify/return_void/replaceFirstOf_replaceFirstOfEach");
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
    // index can be negative or positive.
    OpenArrayItemReplacer.prototype.adjacentAt = function (index, newValues) {
        return this.returnThis_after(replaceAt_replaceAdjacentAt_1.replaceAdjacentAt(index, newValues, this.data));
    };
    OpenArrayItemReplacer.prototype.firstOf = function (value, newValue) {
        return this.returnThis_after(replaceFirstOf_replaceFirstOfEach_1.replaceFirstOf(value, newValue, this.data));
    };
    OpenArrayItemReplacer.prototype.firstOfEach = function (values, newValues) {
        return this.returnThis_after(replaceFirstOf_replaceFirstOfEach_1.replaceFirstOfEach(values, newValues, this.data));
    };
    OpenArrayItemReplacer.prototype.allOf = function (value, newValue) {
        return this.returnThis_after(replaceAllOf_replaceAllOfEach_1.replaceAllOf(value, newValue, this.data));
    };
    OpenArrayItemReplacer.prototype.allOfEach = function (values, newValues) {
        return this.returnThis_after(replaceAllOf_replaceAllOfEach_1.replaceAllOfEach(values, newValues, this.data));
    };
    OpenArrayItemReplacer.prototype.adjacentWithOne = function (newValue, startIndex, numItemsToReplace) {
        // @ts-ignore
        return this.returnThis_after(this.data.fill(newValue, startIndex, startIndex + numItemsToReplace));
    };
    OpenArrayItemReplacer.prototype.allWithOne = function (value) {
        // @ts-ignore
        return this.returnThis_after(this.data.fill(value));
    };
    // numBookendsToPreserve is how many items at the head and tail you don't want
    // to replace.
    // Example: if array is [1,2,3,4,5,6,7] , and you call .middle([9,10], 2)
    // the result will be [1,2,9,10,6,7] .  It preserves the first 2 items and
    // the last 2.
    OpenArrayItemReplacer.prototype.middle = function (values, numBookendsToPreserve) {
        return this.returnThis_after(replaceMiddle(values, numBookendsToPreserve, this.data));
    };
    return OpenArrayItemReplacer;
}(OpenArrayContainer_1.OpenArrayContainer));
exports.OpenArrayItemReplacer = OpenArrayItemReplacer;
