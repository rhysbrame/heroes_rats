var Food = function(params){
  this.name = params.name;
  this.replenishValue = params.replenishValue;//out of 100
  this.contaminated = false;
};

Food.prototype = {
  poison: function(){
    this.contaminated = true;
  },

};

module.exports = Food;