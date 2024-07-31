import { useState, useRef } from 'react';
import Note from './Note';

const Uncontrolled = (props) => {
  
  const [notes, setNotes] = useState(props.notes);
  const newNoteRef = useRef(null); // Create a ref for the input element

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNoteRef.current.value, // Access the input value directly from the ref
      important: Math.random() < 0.5,
      id: notes.length + 1
    };
    setNotes(notes.concat(noteObject));
    newNoteRef.current.value = ''; // Clear the input field
  };

  return (
    <div>
      <h1>Uncontrolled Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          ref={newNoteRef} // Attach the ref to the input element
          defaultValue='a new note...' // Set a default value
        />
        <button type='submit'>save</button>
      </form>
    </div>
  );
}

export default Uncontrolled
