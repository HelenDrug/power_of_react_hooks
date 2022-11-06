# power_of_react_hooks

This repo is for coding session of the talk "The Power of React Hooks" for NovaSummit 2022

#1
show how useState() hook works.

#2
show how to add useEffect() - for example:

- if dependancy array is empty
  (useEffect(() => {
  setTodos([]);
  },))
- if we add something to the dependancy array, what happens
  useEffect(() => {
  setTodos([]);
  }, [])
- what happens if we add state as dependancy in the useEffect:
  useEffect(() => {
  setTodos([]);
  }, [todos])

  In this section, we will use the useEffect state Hook to update the number of pending tasks whenever the DOM is re-rendered.
  First of all, we need to pull in useEffect from the react library.
  Then we will register a new state Hook for the pending tasks in the Todo component:

      const [tasksRemaining, setTasksRemaining] = useState(0);

We will also add an effect hook to update the state of tasksRemaining when the DOM re-renders:

    useEffect(() => { setTasksRemaining(tasks.filter(task => !task.completed).length) });

Finally, we will update the JSX in the Todo component to reactively display the number of pending tasks.

<div className="header">Pending tasks ({tasksRemaining})</div>

#3
show how to use useController()

#4
show how to use useMemo()

#5
show how to use useRef()

#6
