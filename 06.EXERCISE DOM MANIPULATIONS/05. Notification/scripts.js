function notify(message) {

    let hiddenMessage = document.getElementById("notification");
    hiddenMessage.innerHTML = message;
    hiddenMessage.style.display = "block";


    setTimeout(function () {

        hiddenMessage.style.display = "none";

    }, 2000);



}