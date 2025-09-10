import { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.css"

export interface Todo{
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const initialTodos: Todo[] = [
    { id: 1, text: "Aprender React", completed: true },
    { id: 2, text: "Entender useState", completed: false },    
  ];

  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = (text: string) =>{
    const newTodo : Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    }
    setTodos([...todos, newTodo]);
  }

  const handleToggleTodo = (id:number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id:number) =>{
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="card">
      <h1>Mi Lista de Tareas</h1>      
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeletedTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;