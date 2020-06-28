import React, {useContext, useState} from "react";
import AddTodo from "./AddTodo";
import TodoContext from "./TodoContext";

const TodoComponent = () => {
    const context = useContext(TodoContext)

    return (
        <form onSubmit={context.addTodo}>
            <ul>
                {context.todos.map(todo => (
                    <li key={todo.data}>
                        <input type={"checkbox"} onChange={() => context.toggleTodo(todo.data)}/>
                        <label>{todo.data}</label>
                    </li>
                ))}
            </ul>
                <AddTodo />
        </form>
    )
}

export default TodoComponent
