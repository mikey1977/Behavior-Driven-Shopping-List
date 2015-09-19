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
  // var SLIoutput = ('<li class="completed_' + this.is_done + '"><span>' + this.name + '</span><span>' + this.description + '</span></li>');
  return '<li class="completed_' + this.is_done + '"><input name="wat" type="checkbox"><span>' + this.name + '</span><span>' + this.description + '</span></li>';
}



// checkbox input
// onChange event listener to checkbox that calls changeCheckedStatus(idx, checkbox)
// idx is position of array index of ShoppingListItem
// checkbox is the actual checkbox element


// module.exports = ShoppingListItem;
// module.exports = ShoppingList;

// '<li id="item_0 class="complete_false"'
//   var list_item = document.createElement('li');
//   list_item.id = 'item_'+idx;
//   list_item.className = 'completed_'+this.is_done.toString();

// // '<input type="checkBox" id="checkbox_0" onchange="changeCheckedStatus(0, checkbox0)">'
//   var checkbox = document.createElement('input');
//   checkbox.type = 'checkbox';
//   checkbox.id = 'checkbox_'+idx;
//   checkbox.dataset.listId = idx;
//   checkbox.setAttribute('change', changeCheckedStatus);
//   list_item.appendChild(checkbox);


//   var spanName = document.createElement('span');
//   spanName.innerHTML = this.name;
//   list_item.appendChild(spanName);


//   var spanDescription = document.createElement('span');
//   spanDescription.innerHTML = this.description;
//   list_item.appendChild(spanDescription);


//   var deleteButton = document.createElement('button');
//   deleteButton.type = 'button';
//   deleteButton.className = "btn";
//   deleteButton.onClick = removeItemButton(idx);
//   deleteButton.innerHTML = 'x';
//   list_item.appendChild(deleteButton);

//   return list_item.outerHTML;
