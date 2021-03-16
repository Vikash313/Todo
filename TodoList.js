import React from 'react'
import style from  './style.css'

export function TodoList(props) {

    const handleClick = (e) => {
        const element =  e.target;
        console.log("line-through", e.target);
        element.classList.toggle('Todocomplete');

    };

    return (
        <div>
            <li className="fs-3"  onClick={handleClick} >{props.value}
            <button onClick={() => props.onSelect(props.id)} className="btn btn-danger">X</button></li>
        </div>
    )
}

export default TodoList
