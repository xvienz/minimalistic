import React from 'react';
import { Pane, Heading, Text } from 'evergreen-ui';

// berisi tampilan pertama kali ketika selesai login

export default () => {
    return (
        <Pane justifyContent='center' alignItems="center">
            <Pane display='flex' justifyContent='center'>
                <Heading size={800} marginTop="default">Welcome to Minimalist Website</Heading>
            </Pane>
            <Pane display='flex' justifyContent='center' marginTop={30}>
                <Text size={500}>website menerapkan konsep minimalist</Text>
            </Pane>
        </Pane>
    )
}