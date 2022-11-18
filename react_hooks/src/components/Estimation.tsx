import {EstimationButton} from './EstimationButton';

interface EstimationButtonProps {
    count: number;
}

export const Estimation = (props: EstimationButtonProps) => {
    const {count} = props;

    const memoizedValue = 4

    return (
        <>
            <EstimationButton memoizedValue={memoizedValue}/>
        </>

    )
}