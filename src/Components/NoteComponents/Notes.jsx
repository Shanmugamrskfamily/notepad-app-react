import { React, useState, useEffect } from "react";
import "../css/Note.css";
import CreateNote from "./CreateNote";
import Note from "./Note";
function Notes() 
{
  return (
    <div className="notes">
const [notes, setNotes] = useState([]);
const [inputText, setInputText] = useState("");
      <Note />
      <Note />
      <CreateNote />
    </div>
  );
}
export default Notes;