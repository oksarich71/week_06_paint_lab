const Room = function (area, status) {
  this.area = area;
  this.status = status;
};
Room.prototype.paintRoom = function(){
  this.status = "painted";
};






module.exports = Room
