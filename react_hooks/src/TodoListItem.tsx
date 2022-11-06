import { Box, Checkbox, List, Text } from "@mantine/core";
import React from "react";
import { Todo, ToggleTodo } from "./interfaces";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <List.Item>
      <Box sx={{ display: "flex" }}>
        <Checkbox
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
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
