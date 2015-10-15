var PopDancer = function(top, left, timeBetweenSteps) {
  
  Dancer.call(this, top, left, timeBetweenSteps);
};


PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;

PopDancer.prototype.step = function() { 
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

PopDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: this.top,
    left: this.left,
    border: 'solid 10px yellow'
  };
  this.$node.css(styleSettings);
};

var makePopDancer = function(top, left, timeBetweenSteps) {
  return new PopDancer(top, left, timeBetweenSteps);
};

//popDancer.prototype.


