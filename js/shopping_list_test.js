var expect = chai.expect;
var should = chai.should();

describe ('ShoppingListItem', function() {
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
});