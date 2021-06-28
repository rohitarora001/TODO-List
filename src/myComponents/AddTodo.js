import React from 'react';
import {useState } from 'react';


export const AddTodo = (props) => {
    let btnStyle = {
        margin:"10px"
    }
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("The title or description is required");
        }else{
            props.addTodo(title, desc);
        }
        
    }


    return (
        <div className="container my-3">
            <h3>Add a ToDo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>ToDo Title</label>
                    <input className="form-control" value={title} id="title" aria-describedby="emailHelp" placeholder="Enter title"onChange={(e)=>{setTitle(e.target.value)}} />
                    </div>
                <div className="form-group">
                    <label>ToDo Decription</label>
                    <input className="form-control"type="text" value={desc} id="desc" placeholder="Enter Description" onChange={(e)=>{setDesc(e.target.value)}}/>
                </div>
                
                <button type="submit" className="btn btn-success btn-sm" style={btnStyle}>Submit</button>
            </form>
        </div>
    )
}
