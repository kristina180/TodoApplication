import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useTodoStore } from "../../store/TodoContext";

const AddTask = observer(() => {
  const [value, setValue] = useState("");
  const todoStore = useTodoStore();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (value.trim()) {
      todoStore.addTodo(value.trim());
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-full p-4 text-2xl border-b outline-none placeholder-gray-300"
        placeholder="What needs to be done?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
});

export default AddTask;
