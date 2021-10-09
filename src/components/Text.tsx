// Component import
import React from 'react';
import { Text as TextComponent } from 'react-native';

// Style and constants import

// Other imports

interface Props {
    style?: any;
}

const Text: React.FC<Props> = (props) => {
    const { children, style } = props;

    return <TextComponent style={style}>{children}</TextComponent>;
}

export default Text