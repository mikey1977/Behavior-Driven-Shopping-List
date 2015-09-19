// var ShoppingList = require('./shopping_list_item');



// var SLI = ShoppingListItem(name, description);

function ShoppingList(items) {
  this.items = [];
}

ShoppingList.prototype.addItem = function(items) {
  if (items instanceof ShoppingListItem) {
    this.items.push(items);
    return true;
  } else {
    throw new Error('suck it, your item is not a ShoppingListItem');
  }
};

ShoppingList.prototype.removeItem = function(items) {
  if (this.items.indexOf(ShoppingList)) {
    this.items.pop(items);
  } else {
    throw new Error('WTF, this is not a ShoppingListItem');
  }
};

ShoppingList.prototype.render = function() {
  var str = '<ul class="list">';

  // loop through with rendering
  for (var i = 0; i < this.items.length; i++) {

    // adds internals between single opening and closing tags
    str += (this.items[i].render());
  }
  return str + '</ul>';
}


// module.exports = ShoppingList;