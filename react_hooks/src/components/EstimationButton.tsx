import {Button, Text} from '@mantine/core';
import {useWhyDidYouUpdate} from '../useWhyDidYouUpdate';
import {showNotification} from '@mantine/notifications';

interface EstimationButtonProps {
    memoizedValue: number;
}

export const EstimationButton = (props: EstimationButtonProps) => {
    const {memoizedValue} = props;
    useWhyDidYouUpdate('EstimationButton', props);

    const handleClick = () => {
        showNotification({
            title: 'Estimation',
            message: `The estimation is ${memoizedValue}`,
            color: 'teal',
        })
    }
    return (
        <><Button style={{marginLeft: "10px", marginRight: "10px", backgroundColor: "green"}}
                  onClick={handleClick}
        >Estimate!</Button>
            <Text>{memoizedValue} hours</Text>
        </>
    )
}