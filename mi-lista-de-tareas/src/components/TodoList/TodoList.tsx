interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id:number) => void;
  onDeletedTodo: (id:number) => void;
}

function TodoList({ todos, onToggleTodo, onDeletedTodo }: TodoListProps) {
  return (
    <ul>      
      {todos.map(todo => (
        <li key={todo.id} className={todo.completed ? "completed" : "task-item"}>
            <span onClick={() => onToggleTodo(todo.id)}>
              {todo.text}
            </span>
            <button onClick={() => onDeletedTodo(todo.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;