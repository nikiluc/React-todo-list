import React, {useState, useEffect} from "react";
import './App.css';


//Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  //States -> Value and function that changes value
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]); //Array of todo objects
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  //Rerenders viewable todo items whenever todos is updated or status is changed
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Luc's Todo List</h1>
      </header>
      <Form inputText={inputText}
       todos={todos}
       setTodos={setTodos}
       setInputText={setInputText}
       setStatus={setStatus}
       />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
