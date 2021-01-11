console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem( item ){
  let newItem = basket.push(item)
  return true;
}
function listItems(){
  for (let i=0; i<basket.length; i++){
  const  individualValue = basket[i];
    console.log('indiviual item', individualValue)
  }
}

function empty(){
  basket = [];
}

console.log('basket is:', basket);
console.log('Adding Oranges, expect true', addItem('Oranges'));
console.log('Adding Prunes, expect true', addItem('Prunes'));
console.log('Adding Chips, expect true', addItem('Chips'));
console.log('Basket is now', basket);
console.log(listItems());
console.log(empty());
console.log(basket);
