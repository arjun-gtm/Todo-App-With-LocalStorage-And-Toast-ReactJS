import TodoList from "./components/TodoList";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen bg-stone-800 flex justify-center items-center">
        <TodoList />
      </div>
    </>
  );
};

export default App;
