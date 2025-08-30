import { makeAutoObservable } from "mobx";
import { Todo, TFilters } from "../utils/types";

export class TodoStore {
  todos: Todo[] = [];
  filter: TFilters = "all";

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: string) {
    const newTodo: Todo = {
      id: Date.now(),
      todo,
      completed: false,
    };
    this.todos.push(newTodo);
  }

  toggleTodo(id: number) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }

  clearCompleted() {
    this.todos = this.todos.filter((t) => !t.completed);
  }

  setFilter(value: TFilters) {
    this.filter = value;
  }

  get filteredTodos() {
    switch (this.filter) {
      case "active":
        return this.todos.filter((t) => !t.completed);
      case "completed":
        return this.todos.filter((t) => t.completed);
      case "all":
        return this.todos;
    }
  }

  get activeCount() {
    return this.todos.filter((t) => !t.completed).length;
  }

  get hasCompleted() {
    return this.todos.some((t) => t.completed);
  }
}

export const todoStore = new TodoStore();
