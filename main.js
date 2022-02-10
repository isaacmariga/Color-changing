let button = document.getElementById("btn");
let background = document.getElementById("content");
let colorName = document.getElementById("name");
let choices = ["blue", "red", "orange", "purple", "maroon", "yellow"];
let hex = document.getElementById("hex");
let simple = document.getElementById("simple");


hex.addEventListener("click", event => {
    button.addEventListener("click", event => {
        let choices2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
        background.style.backgroundColor = choices2
        colorName.textContent = choices2
    });
})

simple.addEventListener("click", event => {
    button.addEventListener("click", event => {
        let choice = choices[Math.floor(Math.random() * choices.length)];
        background.style.backgroundColor = choice
        colorName.textContent = choice
    });

})