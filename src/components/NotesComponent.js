import React,{useState} from 'react';
import {Note} from './NoteComponent';


const handleSubmit=(e, notes, setNotes,input,setInput,description,setDescription) =>{
    e.preventDefault();
    const id =(notes.length) ? notes[notes.length-1].id+1 : 0 

    setNotes([...notes, {id:id,message: input,description: description}])
    setInput('');
    setDescription('');
}

const deleteNote = (id,notes,setNotes)=>{
    setNotes(notes.filter(note => note.id != id))
}
export const Notes = () =>{

    const [notes, setNotes] = useState([
        
    ]);

    const [input, setInput] = useState("")
    const [description, setDescription] = useState('')

    return(
        <div className="container">
            <div className="row">
                <div className="col-12 text-center py-3" style={{"background":"black","color":"white"}}>
                    <h1>Your Notes</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 offset-md-2 my-2 py-2">
                    <form onSubmit={(e) => handleSubmit(e,notes,setNotes,input,setInput,description,setDescription)}>
                        <div className="row">
                            <div className="col-12 col-md-5 ">
                                <input onChange={(e) => setInput(e.target.value)} value={input} placeholder="Title" className="form-control" required/>
                            </div>
                            <div className="col-12 col-md-5">
                                <input className="form-control" placeholder="Description" 
                                    onChange={(e) => setDescription(e.target.value)} value={description} />
                            </div>
                            <div className="col-12 my-2">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                {notes.map(note=>{
                    return(
                        <Note message={note.message} id={note.id} description={note.description} deleteNote={(id)=> deleteNote(id,notes,setNotes)}/>
                    );
                    
                })}
            </div>
        </div>
    );
}