import React from 'react';
import { Text } from 'evergreen-ui';

// Bagian untuk menampilkan Footer

export default () => {
    return (
        <Text>
            {'Copyright © Kevin '}
            {new Date().getFullYear()}
            {'.'}
        </Text>
    )
}