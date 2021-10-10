// Component import
import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';


// Style and constants import
import tw from 'tailwind-react-native-classnames';
import useTheme from '../hooks/useTheme';

// Other imports

interface Props {
    logo: any;
    name: string;
    symbol: string;
    graph: any;
    price: string;
    percentage: string;
    color: string;
    wallet: boolean;
}

const Crypto: React.FC<Props> = (props) => {
    const { logo, name, symbol, graph, price, percentage, color, wallet } = props;
    
    const { colors } = useTheme();

    return (
        <TouchableOpacity style={tw`flex-row mt-8 w-full h-10 justify-between`} activeOpacity={0.8}>
            <View style={tw`w-5/12 flex-row`}>
                {/* Icon */}
                <View style={tw`h-full w-3/12 mr-3`}>
                    <View style={[tw`justify-center items-center rounded-full w-10 h-full`, { backgroundColor: colors.primary }]}>
                        <Image source={logo} style={tw`w-6 h-6`}/>
                    </View>
                </View>

                {/* Name */}
                <View style={tw`w-6/12 flex-col justify-center items-start`}>
                    <View style={tw`w-full`}>
                        <Text style={{ fontFamily: 'Medium', fontSize: 16, color: colors.text }}>{symbol}</Text>
                    </View>

                    <View style={tw`w-full`}>
                        <Text style={{ fontFamily: 'Regular', fontSize: 12, color: 'gray' }}>{name}</Text>
                    </View>
                </View>
            </View>

            {/* Graph image */}
            {
                wallet ? 
                <View style={tw`w-3/12 justify-center items-center`}>
                    <Image source={graph} style={tw`w-20 h-10`}/>
                </View>
                :
                null
            }

            {/* Price */}
            <View style={tw`w-4/12 flex-col justify-center items-end`}>
                <View>
                    <Text style={{ fontFamily: 'Medium', fontSize: 16, color: colors.text }}>{price}</Text>
                </View>

                <View>
                    <Text style={{ fontFamily: 'Regular', fontSize: 12, color: color }}>{percentage}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Crypto