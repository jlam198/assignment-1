/* ------------------------- Function to switch between dark and light mode ------------------------- */

//Function to toggle darkmode CSS ------------------------
function darkMode() {
    //Main div item
    document.querySelector("div").classList.toggle("darkmode")
    //Button items
    document.querySelector(".menu-btn").classList.toggle("darkmode") 
    document.querySelector(".new-note-btn").classList.toggle("darkmode")
    document.querySelector(".dark-btn").classList.toggle("darkmode")
    document.querySelector(".note-close-btn").classList.toggle("darkmode-del")
    //Menu items
    document.querySelector(".side-menu").classList.toggle("darkmode-menu")
    document.querySelector(".side").classList.toggle("darkmode-menu")
    //Note area items
    document.querySelector(".new-note").classList.toggle("darkmode-menu")
    document.querySelector(".save-note").classList.toggle("darkmode-menu")
    document.querySelector(".del-note").classList.toggle("darkmode-del")
}

/*  ------------------------- Function to create and save notes ------------------------- */

//Function to create note (display text area) ------------------------
function newNote() {
    //Show textarea
    document.getElementById("new-note").style.display = "block"; 
    //Remove create new note button from view
    document.getElementById("new-note-btn").style.display = "none"; 
    //Show save and delete button
    document.getElementById("sav-del").style.display = "flex"; 
}

//Function to save note ------------------------
let notesArray = []
function saveNote() {
    const note = document.querySelector("textarea").value
    console.log(note)
    const notearr = note.split('\n\n')
    notesArray.push(createNoteObject(notearr))
    //Clear text area
    delNote()
    console.log(notesArray)
    //Get the title of note and store it as a list item in side menu
    const noteTitle = Object.values(newObject)[0]
    console.log(noteTitle)
    const entry = document.createElement("li")
    //Gives new list item the function to load saved note
    entry.onclick = function() {
        document.querySelector("textarea").value = note
        document.getElementById("new-note").style.display = "block"; 
        document.getElementById("new-note-btn").style.display = "none"; 
        document.getElementById("note-close").style.display = "flex"; 
    }
    entry.appendChild(document.createTextNode(noteTitle))
    document.getElementById("side").appendChild(entry)

}

//Function to close loaded note ------------------------
function closeNote() {
    //Remove textarea from view
    document.getElementById("new-note").style.display = "none"; 
    //Remove close button from view
    document.getElementById("note-close").style.display = "none"; 
    //Recover create new note button
    document.getElementById("new-note-btn").style.display = "block"; 
    //Reset textarea value
    document.getElementById("new-note").value = "your text here"; 
}

//Function to create a noteObject ------------------------
function createNoteObject(arr) {
    return newObject = { title: arr[0], body: arr[1] }
}

//Function to remove note (hide text area) ------------------------
function delNote() {
    //Remove textarea from view
    document.getElementById("new-note").style.display = "none"; 
    //Remove save and delete from view
    document.getElementById("sav-del").style.display = "none"; 
    //Recover create new note button
    document.getElementById("new-note-btn").style.display = "block"; 
    //Reset textarea value
    document.getElementById("new-note").value = "your text here"; 
}

/* ------------------------- Function to open and close side menu ------------------------- */

//Function to open side menu ------------------------
function openMenu() {
    //Show Menu
    document.getElementById("side-menu").style.display = "block";
    //Hide Menu Button
    document.getElementById("menu-btn").style.display = "none";
  }

//Function to close side menu ------------------------
function closeMenu() {
    //Hide Menu
    document.getElementById("side-menu").style.display = "none";
    //Show Menu Button
    document.getElementById("menu-btn").style.display = "flex";
}