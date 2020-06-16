import React, {useState, useEffect} from 'react'
import Header from '../common/Header';
import CreateArea from '../common/CreateArea';
import Note from '../common/Note';
import Footer from '../common/Footer';
import noteDB from '../../notes';

function ListPage() {
    const [notes, setNotes] = useState(noteDB)
    const [updateNotes, setUpdateNotes] = useState(false);
    const [refreshNote, setRefreshNote] = useState(false);
    const [deleteRequest, setDeleteRequest] = useState({request:false});
    const [addRequest, setAddRequest] = useState({request: false})

    useEffect(()=>{
        if (deleteRequest.request) {
            if (isListUpdated(notes)){
                console.log("notes are ready to delete!")
                const noteToDelete = deleteRequest;
                setDeleteRequest({request:false});
                deleteNoteProcessed(noteToDelete.id, noteToDelete.note);
                setRefreshNote(prevRefreshNote => !prevRefreshNote)
            }
        } else if (addRequest.request) {
            if (isListUpdated(notes)) {
                console.log("notes are ready to add!")
                const noteToAdd = addRequest;
                setAddRequest({request:false});
                setNotes(prevNotes => {
                    return [...prevNotes, noteToAdd.note]
                  })
                setRefreshNote(prevRefreshNote => !prevRefreshNote)
            }
        }
    }, [notes, deleteRequest, addRequest])

    function addNote(note) {
        if (!isListUpdated(notes)) setUpdateNotes(prevUpdateNotes => !prevUpdateNotes);
        setAddRequest({note: note, request: true})
    }

    function deleteNote(id, note) {
        if (!isListUpdated(notes)) setUpdateNotes(prevUpdateNotes => !prevUpdateNotes);
        
        setDeleteRequest({id: id, note: note, request: true});
    }

    function deleteNoteProcessed(id, note) {
        setNotes(prevNotes =>{
            const newNotes = prevNotes.filter((value, index) => {
                return index !== id;
            })
            return newNotes
        });
    }
    
    function updateNote(note, id){
        let filteredNotes;
       setNotes(prevNotes => {
           // remove old note
           filteredNotes = prevNotes.filter((noteItem, index)=>{
               return index !== id;
           });
           // insert new note 
           filteredNotes.splice(id, 0, note);                  
           return filteredNotes;
       });
       console.log(filteredNotes);
     
    }

    function isListUpdated(mNotes) {
        console.log(mNotes)
        let isUpdated = true;
        mNotes.forEach(note=> {
            if (note.updated === false){ 
                console.log("Note is not updated")
                isUpdated =  false;}
        })
        return isUpdated;
    }

   return <div className="container page">
        <div className="row">
            <Header /> 
        </div>
        <div className="row">
            <div className="col-md-12">
                <CreateArea notes={notes} setNotes={setNotes} addNote={addNote} />
            </div>
        </div>
        <div className=" row list">
        { notes.map((note, index) => (
                     
        (
            
        <Note
        key={index}
        id={index}
        className={"col-lg-3 col-md-4 col-sm-6 col-12"}
        note={notes[index]} 
        updateNote={updateNote}
        deleteNote={deleteNote}
        refreshNote={refreshNote}
        updateNotes={updateNotes}
               
        />
        )
        ))}  
        </div>
        <div className="row">
            <div className="col-lg-12"><Footer /></div>
        </div>   
        
        </div>      
        
        
}

export default ListPage