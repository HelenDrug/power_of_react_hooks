import {useState} from "react";
import {TodoList} from "./TodoList";
import {AddTodoForm} from "./AddTodoForm";
import {AddTodo, Todo, ToggleTodo} from "./interfaces";
import {MantineProvider} from "@mantine/core";

const initialTodos: Todo[] = [
    {
        text: "Walk the dog",
        complete: false,
    },
    {
        text: "Write app",
        complete: true,
    },
];

function App() {
    const [todos, setTodos] = useState(initialTodos);

    const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
        const newTodos = todos.map((todo) => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete,
                };
            }
            return todo;
        });
        console.log(newTodos);
        setTodos(newTodos);
    };

    const addTodo: AddTodo = (text: string) => {
        const newTodo = {text, complete: false};
        setTodos([...todos, newTodo]);
    };

    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
            <AddTodoForm addTodo={addTodo}/>
        </MantineProvider>
    );
}

export default App;
