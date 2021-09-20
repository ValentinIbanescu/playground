const _ = require('lodash');


// For loop
var times = 10;
for(var i = 0; i < times; i++){
    console.log('Hello, World 2');
}

// Lodash.js library _.times method
function sayHello() {
  console.log('Hello, World');
}

_.times(5, sayHello);
