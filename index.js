var price;
price = 123;
var anotherPrice = 123;
var price2 = 5;
var product = "product";
var sellers = "Ten sellers"; // Union type
// Array
var games = ["COD", "FIFA", "PUBG"];
var publications = ["COD", "FIFA", "PUBG"];
var games2 = ["COD", "FIFA", 123];
// Removed duplicate 'add' function implementation to resolve error
// print
function print() {
    console.log("Hello");
}
print();
// now create an object with that interface
var harry = {
    id: 1,
    name: "Harry",
    magic: function (spell) {
        console.log("Casting ".concat(spell));
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
var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    Student.prototype.magic = function (spell) {
        return "".concat(this.name, " casts ").concat(spell, "!");
    };
    return Student;
}());
var potter = new Student(1, "Harry Potter");
console.log(potter.magic("Expelliarmus"));
