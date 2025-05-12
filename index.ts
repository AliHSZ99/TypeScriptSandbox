let price: number;
price = 123;
let anotherPrice: number = 123;

let price2: number = 5;
let product: string = "product";

let sellers: number | string = "Ten sellers"; // Union type

// Array
let games: string[] = ["COD", "FIFA", "PUBG"];
let publications: Array<string> = ["COD", "FIFA", "PUBG"];
let games2: (string | number)[] = ["COD", "FIFA", 123];

// Removed duplicate 'add' function implementation to resolve error

// print
function print(): void {
    console.log("Hello");
}
print();

// interface
interface StudentOfHogwarts {
    id: number;
    name: string;
    magic(spell:string): void;
    age?: number; // optional property
    readonly house: string; // read-only property
}

// now create an object with that interface
const harry: StudentOfHogwarts = {
    id: 1,
    name: "Harry",
    magic(spell: string) {
        console.log(`Casting ${spell}`);
    },
    house: "Gryffindor",
};

// use the object
harry.magic("Expelliarmus");
harry.age = 20; // This will work because age is optional
// print
console.log(harry.name);
console.log(harry.age); // This will print undefined    
console.log(harry.house); // This will print "Gryffindor"
harry.magic("Expelliarmus");

console.log("\n\n");
// class
class Student implements StudentOfHogwarts {
    id: number;
    name: string;
    age?: number;
    house: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    magic(spell: string): string {
        return `${this.name} casts ${spell}!`;
    }
}

const potter = new Student(1, "Harry Potter");
console.log(potter.magic("Expelliarmus"));


