import {TodoList} from "./TodoList";
import {AddTodoForm} from "./AddTodoForm";
import {AddTodo, Todo, ToggleTodo} from "./interfaces";
import {MantineProvider} from "@mantine/core";
import {createContext, useState} from 'react';
import {AppHeader} from './AppHeader';
import {NotificationsProvider} from '@mantine/notifications';

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

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

export const ThemeContext = createContext(themes.light);

const reducer = (state: { count: number; }, action: { type: any; }) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

function App() {
    //const todos: Todo[] = [{text: "Buy groceries", complete: true}, {text: "Go to the gym", complete: true}];
    const [todos, setTodos] = useState<Todo[]>(initialTodos);
    const [count, setCount] = useState(todos.length);
    //const [state, dispatch] = useReducer(reducer, {count: todos.length});


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
        if (selectedTodo.complete) {
            console.log(count)
            setCount(count + 1);
            //dispatch({type: 'increment'})
        } else {
            setCount(count - 1);
            //dispatch({type: 'decrement'})
        }
        setTodos(newTodos);
    };

    const addTodo: AddTodo = (text: string) => {
        const newTodo = {text, complete: false};
        setCount(count + 1);
        //dispatch({type: 'increment'})
        setTodos([...todos, newTodo]);
    };
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <NotificationsProvider>
                <ThemeContext.Provider value={themes.light}>
                    <AppHeader count={count}/>
                    <TodoList todos={todos} toggleTodo={toggleTodo}/>
                    <AddTodoForm addTodo={addTodo}/>
                </ThemeContext.Provider>
            </NotificationsProvider>
        </MantineProvider>
    )
        ;
}

export default App;
