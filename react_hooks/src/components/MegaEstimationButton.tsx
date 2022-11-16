import {Button} from '@mantine/core';
import {useWhyDidYouUpdate} from '../useWhyDidYouUpdate';

interface MegaEstimationButtonProps {
    handleClick: () => void;
}

export const MegaEstimationButton = (props: MegaEstimationButtonProps) => {
    const {handleClick} = props;
    useWhyDidYouUpdate('MegaEstimationButton', props);
    return (
        <><Button onClick={handleClick} style={{marginLeft: "10px", marginRight: "10px", backgroundColor: "red"}}>Boost
            Estimation!</Button>
        </>

    )
}