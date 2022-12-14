import {FC} from "react";
import {TodoListItem} from "./TodoListItem";
import {Todo, ToggleTodo} from "../interfaces";
import {List} from "@mantine/core";

interface ToDoListProps {
    todos: Todo[];
    toggleTodo: ToggleTodo;
}

export const TodoList: FC<ToDoListProps> = ({todos, toggleTodo}) => {
    return (
        <List listStyleType={"none"}>
            {todos.map((todo) => (
                <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo}/>
            ))}
        </List>
    );
};
