var math_libs = require('./mathlib')(); //returning a function
  console.log(math_libs);
  console.log(math_libs.add(3, 2));
  console.log(math_libs.multiply(3, 2));
  console.log(math_libs.square(5));
  console.log(math_libs.random(7, 35));
