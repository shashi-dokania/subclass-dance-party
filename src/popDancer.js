var PopDancer = function(top, left, timeBetweenSteps) {
  
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="ghost.png" class="popDancer" style="width: 100px"></img>');
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
    // height: 100px,
    // width: 100px
    //border: 'solid 10px yellow'
    //background: url("http://www.babyandtotshow.com/wp-content/uploads/2014/01/crawing-baby.jpg")
  };
  this.$node.css(styleSettings);
};

var makePopDancer = function(top, left, timeBetweenSteps) {
  return new PopDancer(top, left, timeBetweenSteps);
};

//popDancer.prototype.


