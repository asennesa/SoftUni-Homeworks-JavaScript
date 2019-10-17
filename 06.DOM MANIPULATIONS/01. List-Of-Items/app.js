



function addItem() {
    let inputField = document.getElementById("newItemText");
    let inputText = inputField.value;
    let list = document.getElementById("items");
    let liElement = document.createElement("li")
    liElement.innerHTML = inputText;
    list.appendChild(liElement);
    inputField.value=""

}