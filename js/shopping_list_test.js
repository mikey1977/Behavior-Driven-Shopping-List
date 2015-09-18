var expect = chai.expect;
var should = chai.should();


//instance of a class should be lower case - var subway, not var Subway

describe('ShoppingListItem', function() {
  var subway;
  beforeEach(function() {
    subway = new ShoppingListItem('sandwich', 'footlong');
  });

  it('should be a class', function() {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('should be a string', function() {
    subway.should.have.property('name');
    subway.name.should.equal('sandwich');
  });

  it('should have a description', function() {
    subway.should.have.property('description');
    subway.description.should.be.a('string');
  });

  it('should have a property is_done', function() {
    subway.should.have.property('is_done');
    subway.is_done.should.equal.null;
  });


  //when calling the instance, should set is_done to true
  // it('should have a "check" method', function() {

  describe('check', function() {
    it('should be a function', function() {
      subway.check.should.be.a('function');
      subway.is_done.should.equal.true;
    });
  });

  describe('uncheck', function() {
    it('should be a function', function() {
      subway.uncheck.should.be.a('function');
      subway.is_done.should.equal.false;
    });
  });

  describe('render', function() {
    it('should be a function', function() {
      subway.render().should.be.a('string');
      subway.render().should.equal('<li class="completed_true"><span>sandwich</span><span>footlong</span></li>');
    });
  });
});


// var subway;
// beforeEach(function() {
//   subway = new ShoppingListItem('sandwich', 'footlong');
// var safeway = new ShoppingList();
// var islandBurger = new ShoppingList('hummus');
//SHOPPING LIST
describe('ShoppingList', function() {
  var safeway;
  beforeEach(function() {
    safeway = new ShoppingList();
  });
  it('should be a class', function() {
    ShoppingList.should.to.be.a('function');
  });

  it('should have an item property', function() {
    safeway.should.have.property('item');
  });

  it('item should be an empty array', function() {
    safeway.item.should.deep.equal([]);
  });

  describe('addItem', function(item) {
    it('should add a ShoppingListItem to item array', function() {
      safeway.addItem(item).should.equal.true;
      safeway.item.should.have.length(1);
    });
  });

  describe('removeItem', function() {
    it('should be a function', function() {
      safeway.removeItem.should.be.a('function');
    });
    it('should remove a specified item from the item array', function() {

    });
    it('should remove last item from array if no parameters are entered', function() {

    });
    it('should throw an error if item is not a ShoppingListItem', function() {

    });
  });

  describe('render', function () {
    it('should be a method', function() {
      safeway.render().should.be.a('string');
      safeway.render().should.equal('');
    });
  });
});

