const Decorator = function () {
  this.paintStock = [];
};


Decorator.prototype.paintLevel = function(){
  return this.paintStock.length
};

Decorator.prototype.addPaint = function(paint){
  this.paintStock.push(paint);
};

Decorator.prototype.paintVolume = function(){
  let total = 0;
  for (let paintCan of this.paintStock) {
  total += paintCan.volume
};

return total

};

Decorator.prototype.calculateIfEnoughPaint = function(room){
  let volume = this.paintVolume()
  if (volume >= room.area){
  return "true";
 };
    {
      return "false";
 };
};

module.exports = Decorator
