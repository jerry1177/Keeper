import React, {useState} from "react";
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {

  const [note, setNote] = useState({ updated: true, edited: false, title: "", content: ""});
  const [isExpanded, setExpanded] = useState(false);

  function changeHandler(event) {
     const name = event.target.name;
     const value = event.target.value;
      setNote( prevNote => {
         return {
             ...prevNote,
             [name] : value
         }
     });
  }

  function addClicked(event) {
    event.preventDefault(); // dont forget this or page will refresh!
    props.addNote(note);
    setNote({ title: "", content: ""})       
  }
  function expand() {
    setExpanded(true);
  }

  return ( <form className="create-note">
      {isExpanded && 
        <textarea name="title" placeholder="Title" value={note.title} onChange={changeHandler} />
      }
      <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={note.content} onChange={changeHandler} onClick={expand}/>
        
       <Zoom in={isExpanded}>
          <Fab onClick={addClicked}><AddIcon /></Fab>
        </Zoom>
      </form>
    
  );
}

export default CreateArea;