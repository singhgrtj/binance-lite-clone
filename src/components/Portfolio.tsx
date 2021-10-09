// Component import
import React, { useState } from 'react'
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Text from './Text';
import { Ionicons } from '@expo/vector-icons';
import Crypto from '../components/Crypto';

// Style and constants import
import tw from 'tailwind-react-native-classnames';
import useTheme from '../hooks/useTheme';

// Other imports

interface Props {}

const Portfolio: React.FC<Props> = (props) => {
    const { } = props;
    const [data, setData] = useState<any>([1, 2, 3, 4]);
    const { colors } = useTheme();

    return (
        <ScrollView style={[tw`flex-1 mt-1 rounded-3xl pt-4`, { backgroundColor: colors.secondary }]} showsVerticalScrollIndicator={false}>
            {/* Total Balance tag */}
            <View style={tw`flex-row items-center px-4`}>
                <Text style={[tw`text-gray-500`, {fontFamily: 'Medium', fontSize: 12, color: colors.text}]}>Total Balance</Text>
                <Ionicons name="eye-sharp" color="darkgray" size={16} style={{ marginLeft: 6}} />
            </View>

            {/* Balance */}
            <View style={tw`flex-row items-center px-4`}>
                <Text style={[tw``, { fontFamily: 'Medium', fontSize: 32, color: colors.text}]}>€1,502.32</Text>
                <Ionicons name="information-circle-sharp" color="darkgray" size={25} style={{ marginLeft: 6}}/>
            </View>

            {/* Deposit - Withdraw */}
            <View style={tw`flex-row w-full justify-evenly items-center pt-10`}>
                <TouchableOpacity style={[tw`w-5/12 bg-gray-100 rounded-full justify-center items-center h-10`, { backgroundColor: colors.primary }]}>
                    <Text style={{ fontFamily: 'Medium', fontSize: 16, color: colors.text }}>Withdraw</Text>
                </TouchableOpacity>

                <TouchableOpacity style={tw`w-5/12 bg-yellow-400 rounded-full justify-center items-center h-10`}>
                    <Text style={{ fontFamily: 'Medium', fontSize: 16, color: colors.text}}>Deposit</Text>
                </TouchableOpacity>
            </View>

            {/* Horizontal line  */}
            <View style={[tw`border mt-10`, {borderColor: colors.primary}]} />
            
            {/* Asset Location */}
            <View style={tw`mt-6 px-4`}>
                <View>
                    <Text style={{ fontFamily: 'Semibold', fontSize: 18, color: colors.text}}>Asset Allocation</Text>
                </View>
                <View style={tw`mt-6`}>
                    <View style={tw`ml-6`}>
                        {/* <Image source={require('../assets/images/donut-chart.png')} style={{ width: 140, height: 140 }}/> */}
                    </View>
                    <View>

                    </View>
                </View>
            </View>

            {/* Horizontal line  */}
            <View style={[tw`border mt-10`, {borderColor: colors.primary}]} />

            {/* Assets */}
            <View style={tw`mt-6 px-4`}>
                <View>
                    <Text style={{ fontFamily: 'Semibold', fontSize: 18, color: colors.text}}>Assets</Text>
                </View>
                <View style={tw`mt-4 flex-row justify-between items-center pr-4`}>
                    <View style={tw`flex-row items-center w-full`}>
                        <Ionicons name="checkmark-circle" style={{ marginRight: 4 }} color="darkgray" size={16}/>
                        <Text style={[tw`text-gray-500` ,{ fontFamily: 'Medium', fontSize: 12}]}>Hide 0 balances</Text>
                    </View>

                    <View>
                        <Ionicons name="search" color="darkgray"/>
                    </View>
                </View>

                <View>
                    {
                        data.map((item: any, index: number) => (
                            <Crypto
                                key={index}
                                name={'Binance'}
                                symbol={'BNB'}
                                percentage={'2.3%'}
                                price={'€323.42'}
                                color={'green'}
                                logo={require('../assets/images/logo.png')}
                                graph={require('../assets/images/green-chart.png')}
                                wallet={false}
                            />
                        ))
                    }
                </View>
            </View>


        </ScrollView>
    );
}

export default Portfolio;