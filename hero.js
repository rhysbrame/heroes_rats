var Hero = function(params){
  this.name = params.name;
  this.favFood = params.favFood;
  this.oneLiner = params.oneLiner
  this.health = 100;
  this.tasks = [];
}

Hero.prototype = {
  talk: function(){
    return "I am " + this.name + ". " + this.oneLiner;
  },

  addTask: function(task){
    this.tasks.push(task)
  },

  eat: function(food){
    
    if(this.favFood === food.name){
      this.health += ((food.replenishValue) * 1.5)
    }
    else{
      this.health += food.replenishValue
    }
    
    if(this.health > 100){
      this.health = 100
    }
  },


};
module.exports = Hero;