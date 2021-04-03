// Unique Values
const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
];
// const categories = ['all', ...new Set(menu.map((item) => item.category))];
// map - get all instances
// new Set - narrow down
// ['all',...] - turn it back to array

const categories = ['all', ...new Set(menu.map((item) => item.category))];
const result = document.querySelector('.result');
result.innerHTML = categories
  .map((category) => {
    return `<button>${category}</button>`;
  })
  .join('');

  //name of array is menu
  //in object is two properties - name, category
  //get only the unique categories 
  //iterate over the categorie retunring only the wanted ones
  //item is parameter. 
  //use set (ES6) only returns unique values.
  // new set pass in new array
  // const categories = new Set(menu.map((item) => item.category))
  //console.log(categories) //returns object.
  //Turn back into array. 
  //categories spread out set. [...] spread operator. put code into array
  //add category of all returns ['all', 'breakfast' 'lunch' 'dinner']

  //looking at html, already have div of result under unqiue values


  //return template string map over and return buttons on each category.
  //turn into string using join(')')

