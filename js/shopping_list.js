function ShoppingList(item) {
  this.item = [];
  // this.addItem = addItem;
}

ShoppingList.prototype.addItem = function(item) {
  if (!item instanceof ShoppingList) {
    throw new Error('suck it');
  }
  this.item.push(item);
}



//ShoppingList.prototype.removeItem = function (ShoppingListItem) {
//  if (this.items.indexOf(ShoppingList)
