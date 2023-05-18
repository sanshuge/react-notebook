import React from "react"
function Sidebar(props){
    const noteElements =props.note.map((note,index)=>
    <div key={note.id}>
       <div className={`title ${note.id === props.currentNote.id ? "selected-note" : "" }`}
            onClick={() => props.setCurrentNoteId(note.id)}
            >

            <h4 className="text-snippet">note {index+1}</h4>
        </div>
    </div>
    ) 

    
    return (
        <section className="pane siderbar">
            <div className="sidebar-header">
                <h3>
                    Notes
                </h3>
                <button onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
export default Sidebar;