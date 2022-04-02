
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

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function () {
//         return `${firstName} ${lastName}`; 
//     }
// }

// var author = new User('Jimmy', 'the', '🐷');
// var user = new User('Tommy', 'the', '🐶');

// author.age = 18;
// console.log(author);
// console.log(user);

// console.log(author.getName());
// console.log(user.getName());

// let i = 15000;
// do {
//     i += 150 ;
//     console.log(i);
// } while (i < 30000);

let gameLibrary = [
    {
    game: 'Pes',
    type: '⚽',
    time: 2022,
    price: 50,
    shit: true,
    },
    {
    game: 'GOW',
    type: '⚔',
    time: 2092,
    price: 10,
    shit: true,
    },
    {
    game: 'Fifa',
    type: '⚽',
    time: 2022,
    price: 50,
    shit: true,
    },
    {
    game: 'Elden Ring',
    type: '🪓',
    time: 2022,
    price: 90,
    shit: true,
    },
    {
    game: 'NFS',
    type: '🚗',
    time: 2012,
    price: 30,
    shit: true,
    }
]

///Xay dung every2/////////////////////////////////////////////////////////////////////

// Array.prototype.every2 = function(callback) {
//     var output = true
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index], index, this)
//             if (!result) {
//                 output = false;
//                 break
//             }
//         } 
//     }return output
// }

// let result = gameLibrary.every2(function(a) {
//     return a.shit === true;
// })
// console.log(result)

//Xay dung some 2 //////////////////////////////////////////////////////////////////////

// Array.prototype.some2 = function(callback) {
//     var output = false;
//     for (let index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (callback(this[index], index, this)) {
//                 return true;
//             }
//         }
//     }
//     return output;
// }

// let result = gameLibrary.some2(function(game, index, array) {
//     return game.shit;
// });
// console.log(result)




// xay dung filter 2 /////////////////////////////////////////////////////////////////
// Array.prototype.filter2 = function (callback) {
//     let output = []
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback (this[index], index, this)
//             if (result) {
//                 output.push(this[index]);
//             }
//         }
//     }
//     return output
// }

// let filterPrice = gameLibrary.filter2(function(a) {
//     return a.price > 40;
// })
// console.log(filterPrice)

// Xay dung map2///////////////////////////////////////////////////////////////////
// let newLibrary = gameLibrary.map(function(gameLib) {
//     return {
//         game: gameLib.game,
//         time: `Year ${gameLib.time}`,
//         type: gameLib.type,
//     }
// })
// console.log(newLibrary)

// let totalPrice = gameLibrary.reduce((a, b) => a + b.price, 0);
// console.log(totalPrice)



// Array.prototype.map2 = function(callback) {
//     let output = []
//     let arrLength = this.length;
//     for (i = 0; i < arrLength; ++i) {
//         let result = callback(this[i]);
//         output.push(result)
//     }
//     return output;
// }

// let newLibrary = gameLibrary.map2(function(newLib) 
//     {return {
//     game: newLib.game,
//     price: newLib.price,
//     }
// })
// console.log(newLibrary);


const myArray = [
    'Beer',
    'Club',
    'Karaoke',
    'Car',
]

//forEach();

// Array.prototype.forEach2 = function (callback) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             callback (this[index], index, this)
//         }
//     }
// }

// myArray.forEach2(function(a, b, c) {
//     console.log(a, b ,c);
// })

// myArray.length = 5
// for (let index in myArray) {
//     console.log(myArray[index]);
// }

// let htmls = myArray.map((a) => `<h2 ${a} h2>`)
// console.log(htmls.join(''));

// Array.prototype.map2 = function(callback) {
//     let output = [];
//     let arrayLength = this.length;
//     for (i = 0; i < arrayLength; ++i) {
//     var result = callback(this[i]);
//     output.push(result)
//     }
//     return output;
// }

// var htmls = myArray.map2((a) => `<h2>${a}</h2>`)
// console.log(htmls.join(''))




















// function myFunction(param) {
//     if (typeof param === 'function') {
//         param('🐕🐈🐃🐁🐖');
//     }else {
//         alert('Hay nhap ham chinh xac')
//     }}

// function myCallback (value) {
//     console.log('Gia tri la : ', value)
// }

// myFunction (myCallback)