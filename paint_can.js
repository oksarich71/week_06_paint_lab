const PaintCan = function (volume) {
  this.volume = volume;
};

PaintCan.prototype.paint = function(room){
  if(room.area >= this.volume){
    this.volume = 0;
  }
  else {
    this.volume -= room.area;
  }
};


module.exports = PaintCan;
