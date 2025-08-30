import { observer } from "mobx-react-lite";
import { useTodoStore } from "../../store/TodoContext";
import { TFilters } from "../../utils/types";

export const Footer = observer(() => {
  const todoStore = useTodoStore();

  const filters: TFilters[] = ["all", "active", "completed"];

  return (
    <div className="flex justify-between items-center px-4 py-2 border-t text-sm bg-white rounded-b-lg shadow-md">
      <span>{todoStore.activeCount} items left</span>
      <div className="flex gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => todoStore.setFilter(f)}
            className={`px-2 py-1 border rounded ${
              todoStore.filter === f
                ? "border-pink-300 text-pink-600"
                : "text-gray-500"
            }`}
          >
            {f[0].toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <button
        onClick={() => todoStore.clearCompleted()}
        className="text-gray-500 hover:underline"
      >
        Clear completed
      </button>
    </div>
  );
});
