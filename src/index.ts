import multiply, {multiplyByTwo as mBy2, HelloWorld} from './multiply'

const a = 8;
const b = 2;

console.log(`${a} * ${b} = ${multiply(a, b)}`)
mBy2(2)

// Boolean
let bool: boolean = true;

// Number
let num: number = 1 + 0b1 + 0o1 + 0x1;

// String
const hello: string = 'Hello';
const world: string = "World";
const helloWorld = `${hello} ${world}`

// Null and Undefined
let n: null = null;
let u: undefined = undefined;

function uppercaseFirstLetter(str: string | null){
    if (str) {
        return str[0].toUpperCase() + str.substr(1)
    }
}

// Object
type primitiveTypes = boolean | number | string | symbol | null | undefined;
const myObj: object = new Map();

// Void
function log(message: string) : void {
    console.log(message)
}

// Array
let array1: string[] = ['x', 'y'];
let array2: Array<string> = array1;

// Tuple
let tuple: [string, number] = ['str', 1];

// Enum
enum Color {
    Red = 'r',
    Green = 'g',
    Blue = 'b'
}

let myFavoriteColor: Color = Color.Green;
console.log(Color.Red, Color.Green, Color.Blue)

// Any
let ANY: any;
ANY = 'a string';
ANY = 1;
ANY = true

// Type Assertions (typecasting)
/*const email = document.getElementById('email')

if(email) {
    email.addEventListener('change', e => {
        const input = e.currentTarget as HTMLInputElement;
        console.log(input.value)
    })
}*/

// Interface
interface Profile {
    readonly name: string;
    readonly age?: number;
}

let profile: Profile = {
    name: 'John',
    age: 30,
}


// Index Signature
interface A {
    someProp: string,
    [key: string]: number | string;
}

const aInterface: A = {someProp: 'some prop'};

// Call Signature
interface Sum {
    (a: number, b: number): number;
    prop1: string
}

const sum: Sum = (a, b) => a + b;
sum.prop1 = 'some prop';

// Extending Interfaces
interface Parent {
    x: string;
}



