document.querySelector(".btn").addEventListener("click", function() {
    let searchBox = document.querySelector(".search");
    let inputField = document.querySelector(".input");
    searchBox.classList.toggle("active");
    inputField.focus();
});
