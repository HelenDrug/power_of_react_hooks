import {useReducer} from 'react';
import {Box, Button} from '@mantine/core';

const initialState = {count: 0};

function reducer(state: { count: number; }, action: { type: any; }) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Box style={{padding: "10px"}}>
            Count: {state.count}
            <Button style={{marginLeft: "10px"}} onClick={() => dispatch({type: 'decrement'})}>-</Button>
            <Button style={{marginLeft: "10px"}} onClick={() => dispatch({type: 'increment'})}>+</Button>
        </Box>
    );
}