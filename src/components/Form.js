import React from "react";

//Props passed in here
const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {

    //Sets input Text
    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
    };

    //Add todo object to list of todo objects
    const submitTodoHandler = (e) => {
        e.preventDefault(); //Prevents page from refreshing

        //Create todo objects and put them into an array
        //InputText needs to be passed down
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000},
        ])
        setInputText(""); //Reset textbox to empty string
    };

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    //JSX -> links page elements with functions (Component Template)
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>

    );
};

export default Form;