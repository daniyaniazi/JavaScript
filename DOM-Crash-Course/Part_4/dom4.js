var addform = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')
    // form submit event
addform.addEventListener('submit', addItem);
filter.addEventListener('keyup', filterItems)


function addItem(e) {
    e.preventDefault();
    // in to prevent normal submition of form
    // console.log(1);


    // Get Input Value
    var newItem = document.getElementById('newItem');
    // console.log(newItem)
    // Create New Li
    var newLi = document.createElement('li');
    //Add Class
    newLi.className = 'list-group-item';
    // console.log(newli);


    //GET TEXT FROM INPUT
    newLi.appendChild(document.createTextNode(newItem.value));
    // console.log(newLi);



    // // Create Delete button Element
    // var delButton = document.createElement('button');
    // delButton.className = 'btn btn-danger btn-sm float-right delete';


    // ------------------------------------------
    var delIcon = document.createElement('i');
    delIcon.className = 'btn btn-danger btn-sm float-right delete fas fa-trash-alt ';
    // console.log(delIcon)
    // -------------------------------------


    // // Append text node : X
    // delButton.appendChild(document.createTextNode('X'));
    // delButton.appendChild(delIcon)

    delIcon.appendChild(document.createTextNode('  Delete'));


    // // Add Button to LI 
    // newLi.appendChild(delButton)
    newLi.appendChild(delIcon)


    // Append li to list
    itemList.appendChild(newLi)


    // ~~~~~~~~~~~DEL LIST ITEMs~~~~~~~~~~~~
    // DELETE EVENT
    // OR = if(e.target.classList.contains('delete'))
    delIcon.addEventListener('click', removeItem);

    function removeItem(e) {
        // console.log(1);
        if (confirm('Are you sure ? ')) {
            let delLi = e.target.parentElement;
            // console.log(delLi)
            itemList.removeChild(delLi)

            // console.log(e.target.parentElement)
            // itemList.removeChild(e.target.parentElement);
        }

    }


}


//  FILTER ITEMS
function filterItems(e) {
    e.preventDefault();
    // get filter text
    // coverts to lower text
    var searchText = e.target.value.toLowerCase();
    // console.log(searchText);

    // Grab All li in ITEMS LISt
    var liItems = itemList.getElementsByTagName('li');
    // console.log(liItems);
    //  turn HTML collection to an array

    Array.from(liItems).forEach(function(item) {
            var itemText = item.firstChild.textContent;
            // console.log(itemText)

            if (itemText.toLowerCase().indexOf(searchText) != -1) {
                item.style.display = 'block';
                item.style.backgroundColor = 'rgba(215, 232, 234, 0.55)';
            } else {
                item.style.display = 'none';

            }
            text = searchText.toString();
            if (text.length === 0) {
                item.style.backgroundColor = 'white';
            }

        }

    )



}