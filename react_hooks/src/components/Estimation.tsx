import {useCallback, useMemo} from 'react';
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

    const handleEstimationButtonClick = useCallback(() => {
        console.log('Estimated value: 123 days');
    }, [])

    return (
        <>
            <EstimationButton memoizedValue={memoizedValue}/>
            <MegaEstimationButton handleClick={handleEstimationButtonClick}/>
        </>

    )
}