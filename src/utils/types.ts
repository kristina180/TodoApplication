export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId?: number;
}
export type TFilters = "all" | "active" | "completed";
