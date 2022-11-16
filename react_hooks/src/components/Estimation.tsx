import {useMemo} from 'react';
import {EstimationButton} from './EstimationButton';
import {MegaEstimationButton} from './MegaEstimationButton';

interface EstimationButtonProps {
    count: number;
}

export const Estimation = (props: EstimationButtonProps) => {
    const {count} = props;

    const memoizedValue = useMemo(() => {
        return 4 * count
    }, [count]);

    const handleMegaEstimation = () => {
        console.log(Math.random());
    }

    return (
        <>
            <EstimationButton memoizedValue={memoizedValue}/>
            <MegaEstimationButton handleClick={handleMegaEstimation}/>
        </>

    )
}