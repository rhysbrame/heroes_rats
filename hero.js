var _ = require('lodash')

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
    var change = 1;
      if (food.contaminated === true){
        if (food.name === this.favFood){
          change = -1.5;
        } 
        else {
          change = -1;
        }
      } 
      else if (food.name === this.favFood){
        change = 1.5
      }
      this.health += food.replenishValue * change

    if(this.health > 100){
      this.health = 100
    }
  },

  sortLevel: function(){
    return _.sortBy(this.tasks, [function(task){
      return task.level;
    }]);
  },

  sortDifficulty: function(){
    return _.sortBy(this.tasks, [function(task){
      return task.difficulty;
    }]);
  },

  sortUrgency: function(){
    return _.sortBy(this.tasks, [function(task){
      return task.urgency;
    }]);
  },

  sortMaxReward: function(){
    array = _.sortBy(this.tasks, [function(task){
      return task.maxReward;
    }])
    return array.reverse();
  },

  listView: function(){
    return _.filter(this.tasks, function(level) {
      return !level.completed;
    });
  },

};
module.exports = Hero;
