import {Button, Text} from '@mantine/core';
import {useMemo} from 'react';
import {showNotification} from '@mantine/notifications';

interface EstimationButtonProps {
    count: number;
}

export const EstimationButton = ({count}: EstimationButtonProps) => {

    const memoizedValue = useMemo(() => {
        console.log(new Date().toLocaleTimeString())
        return 4 * count
    }, [count]);

    const handleClick = () => {
        showNotification({
            title: 'Estimation',
            message: `The estimation is ${memoizedValue}`,
            color: 'teal',
        })
    }
    return (
        <>
            <Button style={{marginLeft: "10px", marginRight: "10px", backgroundColor: "green"}}
                    onClick={handleClick}
            >Estimate!</Button>
            <Text>{memoizedValue} hours</Text>
        </>

    )
}