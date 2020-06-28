import React, {useContext} from "react";
import TodoContext from "./TodoContext";


const AddTodo = () => {

    const context = useContext(TodoContext)

    const handleChange = (event) => {
        context.setText(event.target.value)
    }

    return (
        <div>
            <input type={"text"} value={context.text} onChange={handleChange}/>
            <button type={"submit"}>Add Todo</button>
        </div>
    )
}

export default AddTodo
