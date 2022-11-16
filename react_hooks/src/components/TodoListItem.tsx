import {Box, Checkbox, List, Text} from "@mantine/core";
import {FC} from "react";
import {Todo, ToggleTodo} from "../interfaces";

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: FC<TodoListItemProps> = ({todo, toggleTodo}) => {
    return (
        <List.Item>
            <Box style={{display: "flex"}}>
                <Checkbox
                    checked={todo.complete}
                    onChange={() => toggleTodo(todo)}
                />
                <Text
                    style={{
                        textDecoration: todo.complete ? "line-through" : undefined,
                        marginLeft: "5px",
                    }}
                >
                    {todo.text}
                </Text>
            </Box>
        </List.Item>
    );
};
