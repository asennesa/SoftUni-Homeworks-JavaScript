function addItem() {
    let inputField = document.getElementById("newText");
    let inputText = inputField.value;
    let list = document.getElementById("items");
    let liElement = document.createElement("li")
    liElement.innerHTML = inputText;
    list.appendChild(liElement);
    inputField.value = "";


    let anchor = document.createElement("a");
    anchor.href = "#";
    anchor.innerHTML = "[Delete]";
    anchor.addEventListener("click", deleteListElement);
    liElement.appendChild(anchor);


    function deleteListElement() {
        //Going back from the anchor <a...</a> to the list element <li>...</li>.
        //This stands for the clicked anchors parent element.
        let elementToDelete = this.parentElement;
        //Going back from the list element <li>...</li> to the unordered list <ul id="items"></ul>.
        let theList = elementToDelete.parentElement;
        //Deleting the element.
        theList.removeChild(elementToDelete);


    }



}