import React, {useState} from "react";
import TodoComponent from "./TodoComponent";
import TodoContext from "./TodoContext";

const App = () => {
    const [todos, setTodos] = useState([{id: 1, data: 'finish lunch', complete: false}])
    const [text, setText] = useState('')

    const addTodo = event => {
        if (text)
            setTodos(todos.concat({id: 1, data: text, complete: false}))

        event.preventDefault()
    }

    const toggleTodo = data => {
        setTodos(todos.map(todo => {
            if (todo.data === data) {
                return {...todo, complete: !todo.complete}
            } else {
                return todo
            }
        }))
    }

    return (
        <TodoContext.Provider value={{addTodo, todos, toggleTodo, setText, text}}>
            <TodoComponent/>
        </TodoContext.Provider>
    )
}

export default App
