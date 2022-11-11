import {useContext} from 'react';
import {Button} from '@mantine/core';
import {ThemeContext} from './App';

export const ThemedButton = () => {
    const theme = useContext(ThemeContext);
    return (<Button style={{background: theme.background, color: theme.foreground, marginLeft: "1rem"}}> I am styled by
        theme
        context! </Button>);
}