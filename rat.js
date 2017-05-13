var Rat = function(){

};

Rat.prototype = {
  nibble: function(food){
    food.contaminated = true;
  },

};

module.exports = Rat;