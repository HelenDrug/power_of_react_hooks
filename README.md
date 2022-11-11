# power_of_react_hooks

This repo is for coding session of the talk "The Power of React Hooks" for NovaSummit 2022

Hello everyone! In this small coding session im going to show you how to use the most commonly used React hooks.
I created a simple ToDo app to demonstrate the usage of the hooks.
What I have in the app is just a list of tasks and a form to add new tasks.
The app is not connected to any backend, so the tasks are not persisted.
The app is styled with Mantine UI library.
//const todos: Todo[] = [{text: "Buy groceries", complete: false}, {text: "Go to the gym", complete: true}];
Since im using here only functional components, I will use React hooks to manage the state of the app. Previously when 
we wanted to manage the state of our app we had to use class components.
Now I don't use any hooks so adding new task doesn't do anything. Let's start with the useState hook.

#1
show how useState() hook works.
useState() lets you add React state to function components.
To do this, we need first to import the hook from React and then declare a variable that will hold the state and the method that will update the state.
Now we need to initialize the state with the initial value. By clicking on the button we still don't see any data being updated, 
that's why we need to call setTodos() method to update the state.
#2
show how to add useEffect() - for example:
The Effect Hook lets you perform side effects in function components (fetch data, re-render component, etc.). Similar to componentDidMount and componentDidUpdate.


- if dependency array is empty
  (useEffect(() => {
  setTodos([]);
  },))
- if we add something to the dependency array, what happens
  useEffect(() => {
  setTodos([]);
  }, [])
- what happens if we add state as dependency in the useEffect:
  useEffect(() => {
  setTodos([]);
  }, [todos])
-  axios.fetch("http://localhost:8080/todos").then((response) => {response.json().then((data) => {setTodos(data);});});

#3
show how to use useCallback()
useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. 
This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate).
useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
const memoizedCallback = useCallback(
() => {
doSomething(a, b);
},
[a, b],
);
const [count, setCount] = useState(0);
const addTodo: AddTodo = useCallback((text: string) => {
const newTodo = {text, complete: false};
//setTodos([...todos, newTodo]);
setCount(count + 1);
}, [todos])
//estimation button

#4
show how to use useMemo()
useMemo will only recompute the memoized value when one of the dependencies has changed. 
This optimization helps to avoid expensive calculations on every render.

#5
show how to use useRef()

#6 useContext() is JavaScript function, which lets you read the context and subscribe to its changes in functional component. Context is primarily
used when some data needs to be accessible by many components at different nesting levels.
To use this hook, you need to import it first from React library like this:
import {useContext} from 'react';
Than we call useContext() function, which accepts context object as argument and returns current context value:
const contextValue = useContext(MyContext);

#7 useReducer() is a hook that is used for state management. It is an alternative to useState(). Accepts a reducer of type (state, action) => newState, 
and returns the current state paired with a dispatch method.
It is preferable to use when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
(If you’re familiar with Redux, you already know how this works.)

