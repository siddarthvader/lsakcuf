var Student = (function () {
    function Student(firstName, lastName, name) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.name = name;
        this.fullName = "helllo " + (firstName + " " + lastName) + " goodperson";
    }
    ;
    Student.prototype.doubleCount = function (number) {
        console.info(number * 2);
    };
    Student.prototype.tripleCount = function (str) {
        console.log(str, 'inside private');
    };
    Student.prototype.printArray = function (arr) {
        for (var i = 0; i < 10; i++) {
        }
    };
    return Student;
}());
;
function hello(person) {
    return "hello " + person.firstName + "+" + person.lastName + " person,\n    how are you?";
}
var user = new Student("oskar", "schindler");
user.doubleCount(10);
user.tripleCount('wow');
console.info(user.fullName);
//# sourceMappingURL=script.js.map