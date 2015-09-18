function ShoppingListItem(name, description) {
  this.name = name;
  this.description = description;
  this.is_done = true;

}
ShoppingListItem.prototype.check = function() {
  this.is_done = true;
}

ShoppingListItem.prototype.uncheck = function() {
  this.is_done = false;
}

ShoppingListItem.prototype.render = function() {
  var SLIoutput = ('<li class="completed_' + this.is_done + '"><span>' + this.name + '</span><span>' + this.description + '</span></li>');
  return ('<li class="completed_' + this.is_done + '"><span>' + this.name + '</span><span>' + this.description + '</span></li>');
}



// var SLI = ShoppingListItem(name, description);

// function ShoppingList(item) {
//   this.item = [];

// }

// ShoppingList.prototype.addItem = function(item) {
//   if (item instanceof ShoppingListItem) {
//     this.item.push(items);
//     return true;
//   } else {
//     throw new Error('suck it, your item is not a ShoppingListItem');
//   }
// };

// ShoppingList.prototype.removeItem = function() {

// }


// module.exports = ShoppingListItem;
module.exports = ShoppingList;