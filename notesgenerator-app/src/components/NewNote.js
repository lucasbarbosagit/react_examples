import classes from './NewNote.module.css';
import { useState } from 'react';

const NewNote = (props) => { 
 const [enteredNote, setEnteredNote] = useState('');
 
 const addNewNoteHandler = (event) => {
    event.preventDefault();
    
    props.onAddNewNote(enteredNote);
    setEnteredNote('');
 };

 const noteChangeHandler = (event) => {
   setEnteredNote(event.target.value);
 };

  return (
    <div className='new-note'>
        <form onSubmit={addNewNoteHandler}>
        <h1 className={classes.label}>Notes Generator</h1>
        <input className={classes.input} id="note"
        value={enteredNote}
        onChange={noteChangeHandler}
         type='text'></input>
        <button className={classes.button}  type='submit'>Add Note</button>
    </form> 
    </div>
  );
};

export default NewNote;