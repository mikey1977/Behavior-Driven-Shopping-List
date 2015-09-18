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


//SHOPPING LIST
describe('ShoppingList', function() {
  // var safeway;
  // beforeEach(function() {
  //   safeway = new ShoppingList();
  // });
  // var safeway = new ShoppingList();

    //list as parameter?
    //safeway = new ShoppingList('list');
  it('should be a class', function() {

    ShoppingList.should.to.be.a('function');
  });

  it('should have an item property', function() {
    var safeway = new ShoppingList('snacks', 'chips');
    safeway.should.have.property('items');
    // safeway.items.should.equal('chips');
    // safeway.name.should.equal('list');
    // include?
  });

  it('item should be an empty array', function() {
    var safeway = new ShoppingList();
    expect(safeway.items).to.deep.equal([]);
  });


  describe('addItem', function() {
    it('should be a function', function() {
      var safeway = new ShoppingList();
      expect(safeway.addItem).to.be.a('function');
    });
    it('should have a property name items', function() {

    })
    // items should be ShoppingListItem

    it('should add a ShoppingListItem to item array', function() {
      // var saferway = new ShoppingList('hummus');
      // var safeway = new ShoppingList();
      // safeway.addItem(items).should.equal('hummus');

      // var saferway = new ShoppingList();
      // var safestway = new ShoppingList('list');

      var safeway = new ShoppingList();

      saferway.addItem(items).should.be.equal.true;
      saferway.items.should.have.length(1);
      // expect(safeway.addItem('list')).to.equal('safestway');
      // safeway.addItem(items).should.be.equal.true;
      // safeway.items.should.have.length(1);
    });
  });

  describe('removeItem', function() {
    it('should be a function', function() {
      expect(safeway.removeItem).to.be.a('function');
    });

    it('should remove a specified item from the item array', function() {
      // var saferway = new ShoppingList;
      // var safestway = saferway('list');
      // var safishway = saferway('list', 'crap');
      // var safesterWay = saferway('list', 'of', 'crap');
      // expect(safeway.removeItem('of')).to.equal(safishway);
    });
    it('should remove last item from array if no parameters are entered', function() {
      // var saferway = new ShoppingList;
      // var safesterWay = saferway('list', 'of', 'crap');
      // var safestestWay = saferway('list', 'of');
      // expect(safeway.removeItem()).to.equal(safestestWay);
    });
    it('should throw an error if item is not a ShoppingListItem', function() {
      // var saferway = new ShoppingList;
      // var safestway = saferway('list');
      // expect(safeway.removeItem('cow')).to.be.false;
    });
  });

  // describe('render', function () {
  //   it('should be a method', function() {
  //     safeway.render().should.be.a('string');
  //     safeway.render().should.equal('');
  //   });
  // });
});

