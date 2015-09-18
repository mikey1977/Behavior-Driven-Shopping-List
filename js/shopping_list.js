// var ShoppingList = require('./shopping_list_item');



// var SLI = ShoppingListItem(name, description);

function ShoppingList(item) {
  this.item = [];
}

ShoppingList.prototype.addItem = function(item) {
  if (item instanceof ShoppingListItem) {
    this.item.push(item);
    return true;
  } else {
    throw new Error('suck it, your item is not a ShoppingListItem');
  }
};

ShoppingList.prototype.removeItem = function(item) {

}


ShoppingList.prototype.render = function() {
  return ('');
}

// ShoppingList.prototype.removeItem = function (ShoppingListItem) {
//  if (this.items.indexOf(ShoppingList){


// }

module.exports = ShoppingList;