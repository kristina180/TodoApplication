import { observer } from "mobx-react-lite";
import { useTodoStore } from "../../store/TodoContext";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = observer(() => {
  const store = useTodoStore();

  return (
    <ul className="bg-white shadow-md rounded-t">
      {store.filteredTodos.length > 0 ? (
        store.filteredTodos.map((todo) => (
          <TaskItem key={todo.id} todo={todo} />
        ))
      ) : (
        <p className="text-center text-lg px-4 py-3">No todos</p>
      )}
    </ul>
  );
});

export default TaskList;
