import {Box, Button, Text, TextInput} from "@mantine/core";
import {FC, useState} from "react";
import {AddTodo} from "./interfaces";

interface AddTodoFormProps {
    addTodo: AddTodo;
}

export const AddTodoForm: FC<AddTodoFormProps> = ({addTodo}) => {
    const [text, setText] = useState("");
    const [isError, setIsError] = useState(false);

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (text.length === 0) {
            setIsError(true);
        } else {
            setIsError(false);
            addTodo(text);
            setText("");
        }
    };

    return (
        <form>
            <Box sx={{display: "flex", marginTop: "1rem"}}>
                <TextInput
                    style={{width: "550px", marginRight: "1rem"}}
                    placeholder='Add new todo...'
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />
                <Button type='submit' onClick={handleSubmit}>
                    Add Todo
                </Button>
            </Box>
            <Text
                color={"red"}
                style={isError ? {display: "block"} : {display: "none"}}
            >
                Please write a todo which you want to add
            </Text>
        </form>
    );
};
