import {Box, Header, Text} from '@mantine/core';
import {EstimationButton} from './EstimationButton';

interface AppHeaderProps {
    count: number
}

export const AppHeader = ({count}: AppHeaderProps) => {
    return (
        <Header height={50}
                style={{
                    display: "flex",
                    marginBottom: "1rem",
                    paddingLeft: "1rem",
                    backgroundColor: "lightcyan",
                    alignItems: "center",
                    width: "36.5%"
                }}
                children={<Box
                    style={{display: "flex", alignItems: "center", justifyContent: 'center'}}>
                    <Text style={{paddingRight: "10px"}}>Number of unfinished tasks:</Text>
                    <Text>{count}</Text>
                    <EstimationButton count={count}/>
                    {/* <ThemedButton/>*/}
                </Box>}/>

    )
}