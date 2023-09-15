import classes from './App.module.css';
import NewNote from './components/NewNote';
import NoteList from './components/NoteList';
import React, { useState } from 'react';

function App() {
const [noteList, setNoteList] = useState([]);

const addNoteListHandler = (NoteTitle) =>  {
  setNoteList((prevNoteList) => {
    return [...prevNoteList,
       {note: NoteTitle, id: Math.random().toString()},
      ];
  });
};

const noteResetHandler = (event) => {
  event.preventDefault();
  setNoteList([]);
 }

  return (
    <div className={classes.App}>
        <NewNote onAddNewNote={addNoteListHandler} />
        <NoteList notes={noteList} />
        <button className={classes.button} onClick={noteResetHandler}>Reset</button>
    </div>
  );
}

export default App;