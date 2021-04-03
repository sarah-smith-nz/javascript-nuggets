// MAP Method
const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
  },
  {
    name: 'john',
    age: 26,
    position: 'intern',
  },
];
// Quokka.js - Extension
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one



//apply .map on the people array of objects. (const people)
//const ages = people.map()
//as map is going to iterate through each object and return an array
// we pass the object into map as the parameter. this can be named anything. 
//it makes sense to call it a person as thats what the parameter represents
//const ages = people.map(person)
//then we want to return an array with something different
//const ages = people.map(person) => {
// return person.age * 2
//}
//this returns the person object contained within the array being mapped
// and accesses their age property via dot notation, them multiplys it by 2
//can remove curly braces as using arrow function
const getAges = (person) => person.age * 2;
const ages = people.map(getAges);
console.log(ages);


///rather than returning a single value. Return an object
//two properties. person. name but as item is the parameter. 
//set up new property equal to item.name
const newPeople = people.map((item) => {
  return {
    firsName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});
console.log(newPeople);

//accesing the person but instead of returning simple string
//using div in html with result ID

//

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector('#result');

result.innerHTML = names.join('');
//set up inner HTML equal to names array
//collect in one string, using join