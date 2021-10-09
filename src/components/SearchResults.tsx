// Component import
import React, { useState, useEffect } from 'react';
import { TextInput, TouchableOpacity, View, ActivityIndicator, FlatList } from 'react-native';
import Text from './Text';
import Crypto from './Crypto';
import { Ionicons } from '@expo/vector-icons';

// Style and constants import
import { GET_LIST, GET_TRENDING_LIST } from '../constants/endpoint';
import tw from 'tailwind-react-native-classnames';

// Other imports
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import useTheme from '../hooks/useTheme';

interface Props {}

const SearchResults: React.FC<Props> = (props) => {
    const { } = props;
    const navigation = useNavigation();
    const { colors } = useTheme();

    const [text, setText] = useState<string>('');
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        const fetchData = () => {
            axios.get(GET_LIST)
                .then(res => setData(res.data))
                .catch(err => console.log('Error', err))
        }

        fetchData();
    }, [])

    // Function to handle textinput change
    const handleChange = (text: string) => {
        setText(text);
    }

    // Flatlist item
    const renderItem = ({ item }: { item: any }) => {

        const spaceIndex = item.name.indexOf(' ');
        let name = '';
        if (spaceIndex === -1) {
            name = item.name;
        } else {
            name = item.name.substr(0, spaceIndex);
        }
        const symbol = item.symbol.toUpperCase();
        const price = item.current_price;
        const image = item.image;
        let percentage = item.price_change_percentage_24h;

        if (percentage > 0) {
            percentage = item.price_change_percentage_24h.toString().substr(0, 4);
        } else {
            percentage = item.price_change_percentage_24h.toString().substr(0, 5);
        }
        
        return (
            <Crypto
                name={name}
                symbol={symbol}
                percentage={percentage > 0 ? '+' + percentage : percentage}
                price={'€'+price}
                color={percentage < 0 ? 'red' : 'green'}
                logo={{ uri: image }}
                graph={percentage < 0 ? require('../assets/images/red-chart.png') : require('../assets/images/green-chart.png')}
                wallet={false}
            />
        )
    }

    // Flatlist empty
    const renderEmpty = () => (
        <View style={tw`mt-10`}> 
            <ActivityIndicator size="large" color="#000"/>
        </View>
    )
 
    return (
        <View style={tw`flex-1 mt-4`}>
            {/* Input field + cancel */}
            <View style={tw`flex-row h-8 justify-evenly items-center`}>
                <View style={[tw`flex-row h-full items-center rounded-full px-2`, { backgroundColor: colors.primary }]}>
                    <Ionicons name="search" color="darkgray" size={20}/>
                    <TextInput
                        style={[tw`h-full w-8/12 rounded-full pl-2`, { backgroundColor: colors.primary, color: "lightgray" }]}
                        onChangeText={handleChange}
                        value={text}
                        placeholder="Search"
                        placeholderTextColor="lightgray"
                        autoFocus={true}
                    />
                </View>
                <TouchableOpacity style={tw`justify-center items-center`} activeOpacity={0.7} onPress={() => navigation.goBack()}>
                    <Text style={[{ fontFamily: 'Regular', fontSize: 14}, tw`text-yellow-400`]}>Cancel</Text>
                </TouchableOpacity>
            </View>

            {/* Results */}
            <View style={tw`p-6`}>
                <View>
                    <Text style={{ fontFamily: 'Semibold', fontSize: 22, color: colors.text}}>Markets</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    ListEmptyComponent={renderEmpty}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

export default SearchResults;