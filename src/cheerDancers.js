var CheerDancer = function(top, left, timeBetweenSteps) {
  
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="witch.png" style="width:100px;"></img>');
  //this.$node = $('<img src="witch.png" style="width: 100px"></img>');
};


CheerDancer.prototype = Object.create(Dancer.prototype);
CheerDancer.prototype.constructor = CheerDancer;

CheerDancer.prototype.step = function() { 
  Dancer.prototype.step.call(this);
  this.$node.animate({height: '200px'}, "slow");
  this.$node.animate({height: '100px'}, "slow");
};

CheerDancer.prototype.setPosition = function(left, bottom) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    //top: this.top,
    left: this.left,
    bottom: $("body").height() * Math.random()

    // height: 100px,
    // width: 100px
    //border: 'solid 10px yellow'
    //background: url("http://www.babyandtotshow.com/wp-content/uploads/2014/01/crawing-baby.jpg")
  };
  this.$node.css(styleSettings);
};

var makeCheerDancer = function(top, left, timeBetweenSteps) {
  return new CheerDancer(top, left, timeBetweenSteps);
};