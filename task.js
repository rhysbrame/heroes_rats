var Task = function( params ){
  this.level = params.level;
  this.difficulty = params.difficulty;
  this.urgency = params.urgency;
  this.reward = params.reward;
  this.completed = false;
}

Task.prototype = {
  completeTask: function(){
    this.completed = true;
  },

};
module.exports = Task;