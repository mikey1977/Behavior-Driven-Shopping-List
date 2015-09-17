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

// ShoppingListItem.prototype.render = function() {
//   return SLIoutput;
// }

// var SLIoutput =




// <li class="completed_[is_done]"><span>[name]</span>
//  <span>[description]</span></li>. example:
//  <li class="completed_false"><span>Avocado</span>
//  <span>Must be eaten immediately.</span></li>
