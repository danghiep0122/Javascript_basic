
// console.log('--- Hậu tố ---');

// var number1 = 1;

// console.log(number1++); // 1
// console.log(number1); // 2

// console.log(number1++); // 2
// console.log(number1); // 3

// console.log('--- Tiền tố ---');

// var number2 = 1;

// console.log(++number2); // 2
// console.log(number2); // 2

// console.log(++number2); // 3
// console.log(number2); // 3

// var ten = 'Hiep ';

// ten += 'Nguyen';

// console.log (ten);

// var id = Symbol ('id');

// var myFunction = function () {
//     console.log (id);
// }

// var myObject = {
//     name1: 'Trap Boy',
//     age1: 18,
//     address1: 'Viet Nam',
// }

// var myArray = [
//     'Beer',
//     'Club',
//     'Karaoke',
//     'Car',
// ]

// console.log (!!10);
// if (a > 9 || b > 0) {
//     console.log ('Dung')
// } else {
//     console.log ('Sai')
// }

// if (a * 2 == b) {
//     console.log ('Dung')
// } else {
//     console.log ('Sai')
// }

// var isRight = 'true';

// console.log (isRight.indexOf('u'));

// var myFunction = function () {

// };

// function showDialog (mess) {
//     var myString = '';
//     for (var param of arguments) {
//         myString += `${param} - `
//     }
//     console.log (myString);
// }

// showDialog (123,321,6564,123, 548, 458, 'sad', 'ngon');

// function cong(a, b) {
//     return a + b;
// }

// var result = cong (4, 9);
// console.log (result);

// var myString = 'Day la chung cu Hoa Sen 262 llq'
// myString.replace('262 llq' , '262/20 Lac Long Quan')

// console.log(myString)
// console.log(myString.toUpperCase())
// console.log(myString.length)
// var games = 'GOT, Fifa, NFS'
// console.log(games.split(', '))

// function getStringLength(content) {
//     return content.slice(5,9);
// }
// console.log(getStringLength('Xin chao ca the gioi'))

// var age = 80;
// var year = 2022;

// var yearBorn = year - age;
// console.log('Nam sinh la :', yearBorn.toString());

// console.log(typeof 999);

// function isNumber (value) {
//     return typeof value === 'number';
// }
// console.log(isNumber(999)); 
// console.log(isNumber('abc')); 
// console.log(isNumber('100'));


// function isNumber(value) {
//         return typeof value === 'number' && !isNaN(value);
// }
//     // return typeof value === 'NaN';
//     // return typeof value === 'NaN';
//     // if(typeof value.toString() === 'NaN') {
//     //     return false
//     // } else if(typeof value === 'number') {
//     //     return true
//     // } else {
//     //     return false
//     // }

// console.log(isNumber(999)); // true
// console.log(isNumber('abc')); // false
// console.log(isNumber('100')); // false
// console.log(isNumber(NaN)); // false
// console.log(isNumber(100 / '10')); // false

// var abf = 100/'a1012'
// console.log(!isNaN(abf));

// const pig = {
//     ten: 'Jimmy the 🐷',
//     legs: 4,
//     shell: false,
//     meal: 5,
//     diet: 'vegetable',
// }

// function feed(animal) {
//     return `Feed ${animal.ten} ${animal.meal} kilos of ${animal.diet}`;
// }
// console.log(feed(pig));

// function feed({ten,legs, meal, diet}) {
//     return `Feed ${ten} with ${legs} legs, ${meal} kilos of ${diet}`;
// }
// console.log(feed(pig));

// function feed({ten,legs, meal, diet}) {
//     return `Feed ${ten} with ${legs} legs, ${meal} kilos of ${diet}`;
// }

// const myInfo = {
//     name: 'Tommy the 🐶',
//     age: 7,
//     address: 'HCM City 🏰',
//     male: true,
//     getName: function () {
//         return this.name;
//     }
// }
// var myKey = 'address';
// console.log(myInfo.getName());

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return `${firstName} ${lastName}`; 
    }
}

var author = new User('Jimmy', 'the', '🐷');
var user = new User('Tommy', 'the', '🐶');

author.age = 18;
console.log(author);
console.log(user);

console.log(author.getName());
console.log(user.getName());