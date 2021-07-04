import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }
  function letsDelete(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((newItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {notes.map((newNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            onDelete={letsDelete}
            title={newNote.title}
            content={newNote.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
