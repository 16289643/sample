<<<<<<< HEAD
let addNoteBtn = document.querySelector('#addaddNoteBtn');

addNoteBtn.onclik = () => {

    let newNoteInput = document.querySelector('#newNoteInput');
    let notes = document.querySelector('#app .notes')

    //Nuevos Elementos
    let note = document.createElement('li');
    let checkbox = document.createElement('input');

    checkbox.nodeType = "checkbox";
    note.classList.add('note');
    note.innerHTML = newNoteInput.values;
    note.append(checkbox);
    newNoteInput = '';
=======
let addNoteBtn = document.querySelector('#addNoteBtn');
addNoteBtn.onclick = () => {

    //input forms
    let NewNoteInput = document.querySelector('#newNoteInput');
    let notes = document.querySelector('#app .notes')

    //new elements
    let note = document.createElement('li');
    let checkbox = document.createElement('input');

    checkbox.type = "checkbox";

    checkbox.onclick = function () {
        let parent = this.parentElement;
        if (this.checked) {
            parent.classList.add('isDone');
        } else {
            parent.classList.remove('isDone');
        }
    }

    note.classList.add('note');
    note.innerHTML = `<div>${newNoteInput.value}</div>`;
    note.appendChild(checkbox);
    newNoteInput.value = '';
>>>>>>> development
    notes.appendChild(note);
}