module.exports = function (){
  return {
    add: function(num1, num2) {
         let sum = num1 + num2
         return sum
    },
    multiply: function(num1, num2) {
      let result = num1 * num2
      return result
    },
    square: function(num) {
      let result = num * num
      return result
    },
    random: function(num1, num2) {
      let random_num  = Math.floor(Math.random() * num2) + num1;
      return random_num
    }
  }
};
