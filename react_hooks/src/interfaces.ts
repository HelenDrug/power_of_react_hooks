export interface Task {
  taskName: string;
  deadline: number;
}

export interface Todo {
  text: string;
  complete: boolean;
}

export type ToggleTodo = (selectedTodo: Todo) => void;

export type AddTodo = (text: string) => void;
