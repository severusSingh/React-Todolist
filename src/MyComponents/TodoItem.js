import React from 'react'
import './Todoitem.css';


export const TodoItem = ({todo, onDelete}) => {

    return (
        <>
        <div class="card text-center border-dark mb-3 w-25">
            <div class="card-header fw-blod">{todo.title}</div>
                <div class="card-body text-dark">
                    <h5 class="card-title">{todo.desc}</h5>
                    <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
                </div>
        </div>
        <hr/>
        </>
    )
}
