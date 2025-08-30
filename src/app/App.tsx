import { TodoProvider } from "../store/TodoContext";
import AddTask from "../components/AddTask/AddTask";
import TaskList from "../components/TaskList/TaskList";
import { Footer } from "../components/Footer/Footer";

const App = () => {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-full max-w-xl bg-[#ffd5e7] p-10 rounded-xl">
          <h1 className="text-center text-[100px] font-light text-pink-400 tracking-tight leading-none mb-4">
            todos
          </h1>
          <div className="bg-white rounded-lg shadow-lg">
            <AddTask />
            <TaskList />
            <Footer />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
