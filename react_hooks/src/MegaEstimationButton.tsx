import {Button} from '@mantine/core';

interface MegaEstimationButtonProps {
    handleClick: () => void;
}

export const MegaEstimationButton = ({handleClick}: MegaEstimationButtonProps) => {
    console.log('Render Mega Estimation Button')
    return (
        <><Button onClick={handleClick} style={{marginLeft: "10px", marginRight: "10px", backgroundColor: "red"}}>Boost
            Estimation!</Button>
        </>

    )
}