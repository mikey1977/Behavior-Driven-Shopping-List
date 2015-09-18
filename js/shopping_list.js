// var ShoppingList = require('./shopping_list_item');



// var SLI = ShoppingListItem(name, description);

function ShoppingList() {
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

ShoppingList.prototype.removeItem = function(item) {

}


// ShoppingList.prototype.render = function() {
//   return ('');
// }

// ShoppingList.prototype.removeItem = function (ShoppingListItem) {
//  if (this.items.indexOf(ShoppingList){


// }

module.exports = ShoppingList;