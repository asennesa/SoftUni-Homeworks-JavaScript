function solve() {
   let currentMessage = document.getElementById("chat_input");
   let sendButton = document.getElementById("send");

   sendButton.addEventListener('click', sendMessage)

   function sendMessage() {
      let message = currentMessage.value
      let newDiv = document.createElement("div");
      newDiv.classList.add('message', 'my-message')
      newDiv.innerHTML = message
      let chatDiv = document.getElementById("chat_messages").appendChild(newDiv)

      currentMessage.value = ""

   }








}


