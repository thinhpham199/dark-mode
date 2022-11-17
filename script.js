function toggler() {
    document.body.classList.toggle("dark-mode");
    //Rename Button
    let text = document.getElementById("btn");
    if (text.innerHTML === "Dark Mode") {
        text.innerHTML = "Light Mode";
    } else {
        text.innerHTML = "Dark Mode";
    }
}