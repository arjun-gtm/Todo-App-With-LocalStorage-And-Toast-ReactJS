import { Circle, Trash2, Plus, CircleCheckBig } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import TodoItems from "./TodoItems";
import toast from "react-hot-toast";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const addTodos = () => {
    const newTodo = {
      id: Date.now(),
      isCompleted: false,
      text: inputRef.current.value,
    };

    if (newTodo.text.trim() === "") {
      toast.error("Task cannot be empty!");
      return;
    }

    setTodos((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
    toast.success("Todo added successfully!");
  };

  const checkComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    setTodos(updatedTodos);

    const toggledTodo = updatedTodos.find((todo) => todo.id === id);

    if (toggledTodo.isCompleted) {
      toast.success("Todo marked as completed!");
    } else {
      toast.success("Todo marked as not completed!");
    }
  };

  const deleteTodo = (id) => {
    const updatedTodo = todos.filter((todo) => todo.id != id);
    setTodos(updatedTodo);
    toast.success("Todo deleted successfully!");
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos"));
    if (saved) setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="bg-emerald-700 min-h-[80vh] w-full max-w-md rounded-3xl font-bold text-white p-6 flex flex-col mx-auto mt-10 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold">ToDo List</h1>
        <hr className="border-white/50 w-full mt-2" />
      </div>

      {/* Input with Add Button */}
      <div className="flex mb-4">
        <input
          placeholder="Enter a new task..."
          type="text"
          className="flex-1 p-2 sm:p-3 rounded-l-xl bg-emerald-600 placeholder-white text-white border-none outline-none"
          ref={inputRef}
        />
        <button
          onClick={addTodos}
          className="bg-white text-emerald-700 px-3 sm:px-4 rounded-r-xl flex items-center gap-2 font-semibold hover:bg-blue-500 hover:text-black cursor-pointer transition"
        >
          <Plus size={20} /> Add
        </button>
      </div>

      {/* Todo Items */}
      <TodoItems
        todos={todos}
        checkComplete={checkComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoList;
