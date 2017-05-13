var Task = function( params ){
  this.level = params.level; //up to 50
  this.difficulty = params.difficulty; //out of 10
  this.urgency = params.urgency; //out of 5
  this.maxReward = params.maxReward; //max 1000
  this.completed = false;
};

Task.prototype = {
  completeTask: function(){
    this.completed = true;
  },

};

module.exports = Task;