import React from "react";
import { observer } from "mobx-react-lite";
import { useTodoStore } from "../../store/TodoContext";
import { Todo } from "../../utils/types";

const TaskItem = observer(({ todo }: { todo: Todo }) => {
  const todoStore = useTodoStore();

  return (
    <li className="group flex items-center justify-between border-b px-4 py-2 hover:bg-gray-50 transition">
      <div className="flex items-center flex-grow gap-4">
        <button
          className={`w-5 h-5 min-w-5 rounded-full border flex items-center justify-center transition ${
            todo.completed ? "bg-pink-400 text-white" : ""
          }`}
          onClick={() => todoStore.toggleTodo(todo.id)}
        >
          {todo.completed && "✓"}
        </button>
        <span
          className={`text-lg max-w-full break-all whitespace-normal flex-grow ${
            todo.completed ? "line-through text-gray-400" : "text-black"
          }`}
        >
          {todo.todo}
        </span>
      </div>

      <button
        onClick={() => todoStore.removeTodo(todo.id)}
        className="mb-0.5 text-3xl opacity-1000  group-hover:opacity-100 text-gray-400 hover:text-pink-400 transition "
        aria-label="Удалить"
      >
        ×
      </button>
    </li>
  );
});

export default TaskItem;
