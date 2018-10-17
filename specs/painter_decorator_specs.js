const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');

describe('Room', function() {
  let room;
  beforeEach(function() {
    room = new Room(20, "unpainted");
  });

  it('should have an area', function(){
    assert.strictEqual(room.area, 20);
  }); // area end

  it('Should start unpainted', function(){
    assert.strictEqual(room.status, "unpainted");
  }); // status check end

  it('should be able to be painted', function(){
    room.paintRoom();
    assert.strictEqual(room.status, "painted");
  });

  })


  describe('Decorator', function(){

    let decorator;

    beforeEach(function(){
      decorator = new Decorator();
    });

    it('Should start without any paint', function(){
      assert.deepStrictEqual(decorator.paintStock, [])
    });

    it('Should be able to add a can of paint to stock', function(){
      yellow = new PaintCan(20)
      decorator.addPaint(yellow);
      const actual = decorator.paintLevel();
      assert.strictEqual(actual, 1);
    });
    it('should be able to calculate total litres in stock', function(){
      yellow = new PaintCan(20);
      red = new PaintCan(10);
      decorator.addPaint(yellow);
      decorator.addPaint(red);
      const actual = decorator.paintVolume();
      assert.strictEqual(actual, 30);
    })
    it('should be able to calculate if it has enough paint', function(){
      yellow = new PaintCan(20);
      red = new PaintCan(10);
      decorator.addPaint(yellow);
      decorator.addPaint(red);
      room = new Room(20, "unpainted")
      const actual = decorator.calculateIfEnoughPaint(room);
      assert.strictEqual(actual, "true")


    describe('Paint Can', function(){
      let blue;
      let red;
      beforeEach(function(){
        blue = new PaintCan(10);
        red = new PaintCan(30);
      }); // before end

      it('should have a volume', function(){
        assert.strictEqual(blue.volume, 10);
      });

      it('should be able to check if it is empty', function(){
        blue.paint(room)
        assert.strictEqual(blue.volume, 0)
      });

      it('should be able to empty itself of paint', function(){
        red.paint(room)
        assert.strictEqual(red.volume, 10)
      });



    }); //Paint can describe end
  }); // Decorator describe end

}); // Room Describe end
