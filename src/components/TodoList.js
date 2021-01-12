import React from "react";

import Todo from "./Todo";

//For todo list (COMPONENT) -> Won't generate until user adds todo items
const TodoList = ({todos, setTodos, filteredTodos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo setTodos={setTodos}
                        todos={todos}
                        key={todo.id}
                        todo={todo}
                        text={todo.text}/>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;