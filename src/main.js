let addNoteBtn = document.querySelector('#addaddNoteBtn');

addNoteBtn.onclik = () => {

    let newNoteInput = document.querySelector('#newNoteInput');
    let notes = document.querySelector('#app .notes')

    //Nuevos Elementoss
    let note = document.createElement('li');
    let checkbox = document.createElement('input');

    checkbox.nodeType = "checkbox";
    note.classList.add('note');
    note.innerHTML = newNoteInput.values;
    note.append(checkbox);
    newNoteInput = '';
    notes.appendChild(note);
}