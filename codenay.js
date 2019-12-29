// The hungry variable
let hungry = true;

// The eat function
function eat() {
  console.log('eating...');
  hungry = false;
}

// Show if hungry
console.log('Hungry is:', hungry);

// The condition you said
if (hungry) {
  eat();
}

// Show if hungry
console.log('Hungry is:', hungry);