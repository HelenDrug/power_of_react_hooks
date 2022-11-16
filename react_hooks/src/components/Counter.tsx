import {Text} from '@mantine/core';

interface CounterProps {
    count: number
}

export const Counter = ({count}: CounterProps) => {
    return (
        <><Text style={{paddingRight: "10px"}}>Number of unfinished tasks:</Text>
            <Text>{count}</Text>
        </>

    )
}