var Hero = function( params ){
  this.name = params.name;
  this.favFood = params.favFood;
  this.oneLiner = params.oneLiner
  this.health = 100;
  this.tasks = [];
}

Hero.prototype = {
  talk: function(){
    return "I am" + this.name + "  " + this.oneLiner;
  },

}

module.exports = Hero;