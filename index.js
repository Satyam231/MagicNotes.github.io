showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }
    noteobj.push(addTxt.value.toLowerCase())
    localStorage.setItem("notes", JSON.stringify(noteobj))
    addTxt.value = "";
    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }
    let html="";
    noteobj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary"> Delete Note </button>
        </div>
    </div> `;
    })
    let notesElm = document.getElementById("notes")
    if (noteobj.length !=0 ) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`
    }

}

function deleteNote(index) {
    console.log("i am deleting",index)
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }
    noteobj.splice(index,1)
    localStorage.setItem("notes", JSON.stringify(noteobj))
    showNotes();

}

let search = document.getElementById("searchTxt")
search.addEventListener("input",function(){
    let inputval = search.value.toLowerCase();
    let notecard = document.getElementsByClassName("noteCard");
    Array.from(notecard).forEach(function(element){
    let cardText = element.getElementsByTagName("p")[0].innerText
    if(cardText.includes(inputval)){
        element.style.display = "block"
    }
    else{
        element.style.display = "none"
    }
    })
    // console.log("input event fired!" , inputval)
})
