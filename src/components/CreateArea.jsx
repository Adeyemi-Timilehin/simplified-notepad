import React, { useState } from "react";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import Zoom from '@material-ui/core/Zoom';
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
const [expanded, setExpanded]= useState(false)
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
function handleExpand(){
setExpanded(true);
}
  return (
    <div>
      <form>
    {expanded && <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={handleExpand}
          value={note.content}
          placeholder="Take a note..."
          rows={expanded ? 3 : 1 }
        />
            <Zoom in={expanded} />
             <DoneOutlineIcon className="button" onClick={submitNote} />
              <Zoom />
       
      </form>
    </div>
  );
}

export default CreateArea;
