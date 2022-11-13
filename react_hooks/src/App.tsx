import {TodoList} from "./TodoList";
import {AddTodoForm} from "./AddTodoForm";
import {AddTodo, Todo, ToggleTodo} from "./interfaces";
import {MantineProvider} from "@mantine/core";
import {AppHeader} from './AppHeader';
import {NotificationsProvider} from '@mantine/notifications';

function App() {
    let todos: Todo[] = [{text: "Buy groceries", complete: false}, {text: "Go to the gym", complete: false}];


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
        console.log(newTodos)
    }

    const addTodo: AddTodo = (text: string) => {
        const newTodo = {text, complete: false};
        todos.push(newTodo);
        console.log(todos);
    };
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <NotificationsProvider>
                <AppHeader count={0}/>
                <TodoList todos={todos} toggleTodo={toggleTodo}/>
                <AddTodoForm addTodo={addTodo}/>
            </NotificationsProvider>
        </MantineProvider>
    );
}

export default App;
