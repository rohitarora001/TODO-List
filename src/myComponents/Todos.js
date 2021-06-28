import React from 'react';
import { ToDoItem } from './ToDoItem';

export const Todos = (props) => {
    let myStyles={
        minHeight:"70vh",
        margin:"10px auto"
    };

    return (
        <div className="container my-3" style={myStyles}>
            <h3 className="text-center my-3">ToDo's List</h3>
            {
            props.todos.length === 0 ? " No ToDo's to display " :  
            props.todos.map((todo)=>{
                return(
                        <ToDoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> 
                ) 
                })
            }
        </div>
    )
}
