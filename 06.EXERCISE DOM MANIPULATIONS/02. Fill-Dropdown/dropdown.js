function addItem() {
    let text = document.getElementById("newItemText");
    let value = document.getElementById("newItemValue");
    let menu = document.getElementById("menu");
    let createOption = document.createElement("option");

    createOption.innerHTML = text.value;
    createOption.value = value.value;
    menu.appendChild(createOption);
    text.value = "";
    value.value = "";




}