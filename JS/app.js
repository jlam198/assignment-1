/* function to switch between dark and light mode */

function darkMode() {
    document.querySelector("div").classList.toggle("darkmode")
    document.querySelector(".menu-btn").classList.toggle("darkmode")
    document.querySelector(".new-note-btn").classList.toggle("darkmode")
    document.querySelector(".dark-btn").classList.toggle("darkmode")
    document.querySelector(".side-menu").classList.toggle("darkmode-menu")
    document.querySelector(".side").classList.toggle("darkmode-menu li")
}

/*  function to add a new note      
- user clicks button
- textarea and save / cancel buttons appears
- user clicks save to save note to an array
- user clicks cancel to remove note taking textarea and buttons
*/


/* function to open and close side menu */

function openMenu() {
    document.getElementById("side-menu").style.display = "block";
  }

function closeMenu() {
document.getElementById("side-menu").style.display = "none";
}