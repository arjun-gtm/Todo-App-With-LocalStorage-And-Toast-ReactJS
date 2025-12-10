import { Circle, Trash2, CircleCheckBig } from "lucide-react";

const TodoItems = ({todos, checkComplete, deleteTodo}) => {
  return (
    <div>
        <ul className="space-y-4 flex-1 overflow-y-auto">
        {todos.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center bg-emerald-600 p-4 rounded-xl shadow-md hover:bg-emerald-500 transition"
          >
            <div className="flex items-center gap-3">
              <button onClick={() => checkComplete(item.id)}>
                {item.isCompleted ? (
                  <CircleCheckBig
                    className="cursor-pointer hover:text-white/70 transition"
                    size={22}
                  />
                ) : (
                  <Circle
                    className="cursor-pointer hover:text-white/70 transition"
                    size={22}
                  />
                )}
              </button>

              <span className={`text-lg ${item.isCompleted ? "line-through" : ""}`}>{item.text}</span>
            </div>
            <Trash2
              className="cursor-pointer hover:text-red-300 transition"
              size={22}
              onClick={() => deleteTodo(item.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoItems