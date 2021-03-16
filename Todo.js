import React, { useState} from 'react'
import TodoList from './TodoList'
import Axios from 'axios'

export function Todo() {

    const [ todoItems, setTodoItems ] = useState("");
    const [ items, setItems ] = useState([]);

    const bodyData = { todoItems }

    const itemEvent = (e)=> {
        setTodoItems(e.target.value)

    }

    const headers = {
        'Content-Type': 'application/json'
    }

    const submitHandlers = () => {
        async function todoData() {
            const response = await Axios.post('http://localhost:4000/api/todo', bodyData, {headers})
            .then(response => response)
            .catch((error) => console.trace(error));
        }
        todoData();
    }

    // const submitHandlers = () => {
    //     todoData();
    //     setItems((oldItems) => {
    //         return [...oldItems, todoItems];
    //     })
    //     setTodoItems(""); 
    // }

    const deleteItems = (id) => {
        console.log("deleted");
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div>
            <h1 className="fs-1" >Todo</h1>
                <input type="text" placeholder="Enter your list" onChange={itemEvent} value={todoItems}/>
                <button type="submit" className="btn btn-success" onClick={submitHandlers}>Add todo</button>
              <ol>      
                  {items.map((itemval, index) => {
                   return <TodoList 
                   id={index} 
                   key={index} value={itemval} 
                       onSelect={deleteItems}
                   />
                  })}
              </ol>
        </div>
    )
}

export default Todo

