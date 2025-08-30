import { TodoStore } from "../store/TodoStore";
import { Todo } from "../utils/types";

describe("TodoStore", () => {
  let store: TodoStore;

  beforeEach(() => {
    store = new TodoStore();
  });

  test("should add a new todo", () => {
    store.addTodo("New todo");
    expect(store.todos.length).toBe(1);
    expect(store.todos[0].todo).toBe("New todo");
    expect(store.todos[0].completed).toBe(false);
  });

  test("should toggle a todo", () => {
    store.addTodo("New todo");
    const todo = store.todos[0];

    store.toggleTodo(todo.id);
    expect(store.todos[0].completed).toBe(true);

    store.toggleTodo(todo.id);
    expect(store.todos[0].completed).toBe(false);
  });

  test("should remove a todo", () => {
    store.addTodo("New todo");
    const todo = store.todos[0];

    store.removeTodo(todo.id);
    expect(store.todos.length).toBe(0);
  });

  test("should clear completed todos", () => {
    store.addTodo("New todo 1");
    store.addTodo("New todo 2");
    const todo1 = store.todos[0];
    const todo2 = store.todos[1];

    store.toggleTodo(todo1.id);
    store.clearCompleted();

    expect(store.todos.length).toBe(1);
    expect(store.todos[0]).toBe(todo2);
  });

  test("should set a filter", () => {
    store.setFilter("completed");
    expect(store.filter).toBe("completed");
  });

  test("should get filtered todos", () => {
    store.addTodo("New todo 1");
    store.addTodo("New todo 2");
    const todo1 = store.todos[0];
    const todo2 = store.todos[1];

    store.toggleTodo(todo1.id);

    store.setFilter("active");
    expect(store.filteredTodos.length).toBe(1);
    expect(store.filteredTodos).toEqual([todo2]);

    store.setFilter("completed");
    expect(store.filteredTodos.length).toBe(1);
    expect(store.filteredTodos).toEqual([todo1]);

    store.setFilter("all");
    expect(store.filteredTodos.length).toBe(2);
    expect(store.filteredTodos).toEqual([todo1, todo2]);
  });

  test("should calculate activeCount", () => {
    store.addTodo("New todo 1");
    store.addTodo("New todo 2");
    const todo1 = store.todos[0];
    const todo2 = store.todos[1];

    store.toggleTodo(todo1.id);

    expect(store.activeCount).toBe(1);
  });
});
