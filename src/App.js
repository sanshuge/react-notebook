import React from "react"
import Editor from "./components/Editor.js";
import Sidebar from "./components/Sidebar.js"

function App() {
  const [notes,setNotes] = React.useState([])
  const [currentNoteId,setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
)
  return (
    <div className="App">
      <h1>this is the notebook</h1>
      <Editor/>
      <Sidebar/>
    </div>
  );
}

export default App;
