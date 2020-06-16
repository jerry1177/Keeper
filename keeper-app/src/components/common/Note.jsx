import React, {useState, useEffect} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import Col from 'react-bootstrap/Col';
function Note(props) {  
    
    const [Height, setHeight] = useState({tHeight:"", taHeight:""});
    const [note, setNote] = useState(props.note);

    useEffect(()=>{   
               
        setNote(props.note);
           // console.log(document.getElementById("note refreshed"))
        updateHeight(document.getElementById(props.id+"title"));
        updateHeight(document.getElementById(props.id+"content"));  
            
    }, [props.refreshNote]);   
 
    useEffect(()=>{
        if (!note.updated) {
            console.log("note " + note.title +" is edited and updated now!")
            setNote(prevNote=> { 
                return {...prevNote, updated: true};
             })
        }
    }, [props.updateNotes])
    
    useEffect(()=> {
        props.updateNote(note, props.id);
    }, [note.updated, note.edited]);

    function saveNote() {
        console.log("saved click")
         setNote(prevNote=> {
            return {...prevNote, updated: true, edited: false}
        });
        
    }
   
     async function noteChanged(event) {  
        event.persist()
        const name = event.target.name;
        //console.warn(name)
        const value = event.target.value;
        // set note edited  to true and update list note

        if (note.updated) {
            console.warn("hey")
            setNote(prevNote => {
                return {...prevNote, edited: true, updated: false};               
            });           
        }
        // change local note
        setNote(prevNote => {
            return {...prevNote, [name]: value}
        });
        // update text height
        
        await updateHeight(event.target);
    
    }
    async function updateHeight(target) {
        try {
            //console.warn(target)
            const name = target.name === "title" ? "tHeight" : "taHeight";
           
            await setHeight(prevHeight => {
                //console.log(Height)
                //console.log({...prevHeight, [name]: '30px'})
                return {...prevHeight, [name]: "30px"};
            });

            const value = target.scrollHeight;
        
            setHeight(prevHeight => {
                //console.log({...prevHeight, [name]: value+"px"})
                return {...prevHeight, [name]: value+"px"};
            });
        } catch (err) {console.log(err);}
    }
 
    function deleteNote() {
        props.deleteNote(props.id, note);
    }
    return <div className={props.className}><div className="note"> 
    <textarea type="text"  name="title" id={props.id+"title"} onChange={noteChanged} style={{height:Height.tHeight}} value={ note.title}/>
    <textarea name="content" id={props.id+"content"} onChange={noteChanged} style={{height:Height.taHeight}} value={ note.content}/>
<button onClick={note.edited ? saveNote : deleteNote}>{note.edited ? <SaveIcon /> : <DeleteIcon />}</button></div></div>
}

export default Note;