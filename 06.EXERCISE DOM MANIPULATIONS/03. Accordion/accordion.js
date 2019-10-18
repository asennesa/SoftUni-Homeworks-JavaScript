function toggle() {
    let [span] = document.getElementsByTagName("span");
    let content = document.getElementById("extra");
    if (span.innerHTML === "More") {
        span.innerHTML = "Less"
        content.style.display = "block"
    } else {
        span.innerHTML = "More"
        content.style.display = "none"

    }
}