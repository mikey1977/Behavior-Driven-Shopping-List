var test = new ShoppingList();

// var store = test.render();

// document.getElementById("content").innerHTML = store;


function add_to_shopping_list() {
  var tits = document.getElementById("title").value;
  var ass = document.getElementById("description").value;
  var item = new ShoppingListItem(tits, ass);
  test.addItem(item);
  document.getElementById("content").innerHTML = test.render();
//figure out what to do with tits and ass
//read value of title and description fields
}


// var new_shopping_list_item;


// ShoppingList.addItem(new_shopping_list_item);


function changeCheckedStatus(idx, checkbox) {

}