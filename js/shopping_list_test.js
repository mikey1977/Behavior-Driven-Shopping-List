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
    var subway;
    beforeEach(function() {
      subway = new ShoppingListItem('sandwich', 'footlong');
    });

    it('should be a function', function() {
      subway.check.should.be.a('function');
      subway.is_done.should.equal.true;
    });
  });

  describe('uncheck', function() {
    var subway;
    beforeEach(function() {
      subway = new ShoppingListItem('sandwich', 'footlong');
  });
    it('should be a function', function() {
      subway.uncheck.should.be.a('function');
      subway.is_done.should.equal.false;
    });
  });

  describe('render', function() {
    var subway;
    beforeEach(function() {
      subway = new ShoppingListItem('sandwich', 'footlong');
  });
    it('should be a function', function() {
      subway.render().should.be.a('string');
      subway.render().should.equal('<li class="completed_true"><span>sandwich</span><span>footlong</span></li>');
    });
  });
});



//SHOPPING LIST
describe('ShoppingList', function() {
  var safeway;
  beforeEach(function() {
    safeway = new ShoppingList('hummus');
  });

  it('should be a class', function() {
   expect(ShoppingList).to.be.a('function');
  });

  it('should have a property item', function() {
    safeway.should.have.property('item');
    safeway.item.should.be.empty;
  });

  describe('addItem', function() {
    it('should be a method', function() {
    safeway.addItem.should.be.a('function');
    });
    it('should accept a ShoppingListItem argument', function() {
      safeway.addItem.should.have.property('ShoppingListItem');
    })
  });
});

