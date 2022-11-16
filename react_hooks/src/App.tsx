import {TodoList} from "./components/TodoList";
import {AddTodoForm} from "./components/AddTodoForm";
import {AddTodo, Todo, ToggleTodo} from "./interfaces";
import {MantineProvider} from "@mantine/core";
import {NotificationsProvider} from '@mantine/notifications';
import {AppHeader} from './components/AppHeader';
import {createContext, useReducer, useState} from 'react';

const initialTodos: Todo[] = [
    {
        text: "Buy groceries",
        complete: false,
    },
    {
        text: "Go to the gym",
        complete: false,
    },
];

const reducer = (state: { count: number; }, action: { type: string; }) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

const themes = {
    light: {
        foreground: "#000000",
        background: "#ffffff"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

export const ThemeContext = createContext(themes.light);

export default function App() {
    /*  let todos: Todo[] = [{text: "Buy groceries", complete: false}, {text: "Go to the gym", complete: false}];*/


    const [todos, setTodos] = useState(initialTodos);
    const [state, dispatch] = useReducer(reducer, {count: todos.length})


    const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete
                };
            }
            return todo;
        });
        if (selectedTodo.complete) {
            dispatch({type: 'increment'})
        } else {
            dispatch({type: 'decrement'})
        }
        setTodos(newTodos);
    }

    const addTodo: AddTodo = (text: string) => {
        const newTodo = {text, complete: false};
        dispatch({type: 'increment'})
        setTodos([...todos, newTodo]);
    };
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <NotificationsProvider>
                <ThemeContext.Provider value={themes.dark}>
                    <AppHeader count={state.count}/>
                    <TodoList todos={todos} toggleTodo={toggleTodo}/>
                    <AddTodoForm addTodo={addTodo}/>
                </ThemeContext.Provider>
            </NotificationsProvider>
        </MantineProvider>
    );
}