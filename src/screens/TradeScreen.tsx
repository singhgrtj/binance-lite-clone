// Component import
import React from 'react';
import { View } from 'react-native';
import Text from '../components/Text';

// Style and constants import
import tw from 'tailwind-react-native-classnames';

// Other imports

interface Props {}

const Trade: React.FC<Props> = (props) => {
    const {} = props;

    return (
        <View style={tw`flex-1 justify-center items-center`}>
            <Text>TRADE</Text>
        </View>
    );
}

export default Trade