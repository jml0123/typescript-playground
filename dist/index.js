"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const multiply_1 = __importStar(require("./multiply"));
const a = 8;
const b = 2;
console.log(`${a} * ${b} = ${multiply_1.default(a, b)}`);
multiply_1.multiplyByTwo(2);
// Boolean
let bool = true;
// Number
let num = 1 + 0b1 + 0o1 + 0x1;
// String
const hello = 'Hello';
const world = "World";
const helloWorld = `${hello} ${world}`;
// Null and Undefined
let n = null;
let u = undefined;
function uppercaseFirstLetter(str) {
    if (str) {
        return str[0].toUpperCase() + str.substr(1);
    }
}
const myObj = new Map();
// Void
function log(message) {
    console.log(message);
}
// Array
let array1 = ['x', 'y'];
let array2 = array1;
// Tuple
let tuple = ['str', 1];
// Enum
var Color;
(function (Color) {
    Color["Red"] = "r";
    Color["Green"] = "g";
    Color["Blue"] = "b";
})(Color || (Color = {}));
let myFavoriteColor = Color.Green;
console.log(Color.Red, Color.Green, Color.Blue);
// Any
let ANY;
ANY = 'a string';
ANY = 1;
ANY = true;
let profile = {
    name: 'John',
    age: 30,
};
const aInterface = { someProp: 'some prop' };
const sum = (a, b) => a + b;
sum.prop1 = 'some prop';
