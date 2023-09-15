
import classes from './NoteList.module.css';

const NoteList = (props) => {
  return (
    <div className={classes.notes}>
   <ul className={classes.ul}>
    {props.notes.map((note) => (
      <li className={classes.li} key={note.id}>
        {note.note}
      </li>
    ))}
   </ul> 
   </div>
  );
}
  

export default NoteList;