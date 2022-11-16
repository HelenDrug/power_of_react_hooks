import {Box, Header} from '@mantine/core';
import {Counter} from './Counter';

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
                    width: "42.5%",
                }}
                children={<Box
                    style={{display: "flex", alignItems: "center", justifyContent: 'center'}}>
                    <Counter count={count}/>
                </Box>}/>
    )
}