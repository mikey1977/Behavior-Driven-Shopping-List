function ShoppingListItem(name, description, is_done) {
  this.name = name;
  this.description = description;
  this.is_done = is_done;

}
ShoppingListItem.prototype.check = function(is_done) {
  this.is_done = true;
}

ShoppingListItem.prototype.uncheck = function(is_done) {
  this.is_done = false;
}

ShoppingListItem.prototype.render = function() {

}