import {Button} from '@mantine/core';
/*import {ThemeContext} from '../App';*/

export const ThemedButton = () => {
    //const theme = useContext(ThemeContext);
    // @ts-ignore
    return (<Button style={/*{background: theme.background, color: theme.foreground, marginLeft: "1rem"}*/}>
        Context! </Button>);
}