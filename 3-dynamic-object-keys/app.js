
const person = ['hello', 'great'];

const testPerson = person.map(function (item) {
  console.log(item);
});

const newPerson = person.map(function (item) {
  if (item === 'hello') {
    return item.toUpperCase();
  }
  return item;
});
console.log(newPerson);

//set up keys dynamically using square bracket notations

let appState = 'loading'
appState = 'error' //would change log to {error: true}
const keyName = 'computer' //setting variable to whatever value the key is
const app= {
  //set up key
  [appState]: true //console.log(app) //prints {loading: true}
}
app [keyName] = 'apple' //create new key equal to an apple
//create variable

const state = {
  loading: true,
  name: '', //empty string
  job: ''
}
//add or change or update the values on the object
//functon takes two arguments, key name and value
function updateState(key,value){
  state[key] = value
}
//update the key name 
updateState('name', 'john')
console.log(state) //{loading:true, name,'john', job: ''}

//can create new keys too
updateState('product', [])



/* 
dot notation
const person = {
  name: 'john' ,
}
console.log(person.name) //john
person.age = 25
console.log(person) //{name:'john', age: 25}
*/

/*
square bracket notation
const items = {
  'featured-items' : ['item1', 'item2']
}
trying to access this wont work
console.log(items['featured-items']) //prints ['item1', 'item2']

*/