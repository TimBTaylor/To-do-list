function newItem(){


  let li = $('<li></li>');
  let userInput = $('#input').val();
  li.append(userInput);
//checks to make sure there is something in the input field
  if (userInput === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

//crossing out an item
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', crossOut);

// adding delete button on each new item
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);

//functions adds delete class from css, therefore removing item from the screen
  function deleteListItem() {
    li.addClass('delete');
  }

//allowing user to move items
   $('#list').sortable();

}
