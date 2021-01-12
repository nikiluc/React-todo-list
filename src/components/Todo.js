import React from "react";

//For each todo list element (COMPONENT)
const Todo = ({text, todo, todos, setTodos}) => {

    //Deletes todo list element on trash button press
    const deleteHandler = () => {

        //Only show the elements that weren't clicked on to be deleted
        setTodos(todos.filter(el => el.id !== todo.id));

    }
    //Marks item as complete (or incomplete depending on value)
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
            })
        );
    };
    //JSX -> links page elements with functions (Component Template)
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed": ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
}
//Exports todo object
export default Todo;