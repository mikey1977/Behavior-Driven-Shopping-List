var expect = chai.expect;
var should = chai.should();


var subway;
beforeEach(function() {
  subway = new ShoppingListItem('sandwich', 'footlong');
});

describe('ShoppingListItem', function() {



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
  // it('should have a method check', function() {
  //   // subway.should.have.property('check');
  //   subway.is_done.should.equal.true;
  // });
  // it('should have a method uncheck', function() {
  //   // subway.should.have.property('uncheck');
  //   subway.is_done.should.equal.false;
  // });
});

  //when calling the instance, should set is_done to true
  // it('should have a "check" method', function() {

describe('check', function() {
  it('should be a function', function() {
    subway.check.should.be.a('function');
    subway.is_done.should.equal.true;
    // subway.check.should.be(true);
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
    subway.render.should.be.a('function');

  });
});


