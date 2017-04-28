var names = ['AAA','BBB','CCC'];
// names.forEach(function (name) {
//   console.log('forEach : ',name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc : ',name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('AAA'));

// var person = {
//   name:'AAA',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };

//person.greet();


//----------------------****************------------
function add(a,b){
  return a+b;
}
//addStatement
var addStatement = (a,b) => {
  return a + b;
};
console.log(addStatement(10,1));

//addExpression
var addExpression = (a, b) => a + b;
console.log(addExpression(10,-5));

// console.log(add(1,2));
// console.log(add(3,4));
