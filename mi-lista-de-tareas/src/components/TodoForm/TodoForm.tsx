// src/components/TodoForm.tsx
import { useState } from "react";

// Definimos las props que este componente recibe
interface TodoFormProps {
  onAddTodo: (text: string) => void; // Espera una función que recibe un texto
}

function TodoForm({ onAddTodo }: TodoFormProps) {
  // Este componente tiene su propio estado para manejar el texto del input
  const [inputText, setInputText] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Previene que la página se recargue
    if (inputText.trim() === "") return; // No añadir si está vacío

    onAddTodo(inputText); // Llama a la función que recibió por props
    setInputText(""); // Limpia el input después de añadir
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="¿Qué necesitas hacer?"
      />
      <button type="submit">Añadir</button>
    </form>
  );
}

export default TodoForm;