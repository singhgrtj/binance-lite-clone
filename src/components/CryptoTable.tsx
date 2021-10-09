// Component import
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import Text from './Text';
import Crypto from './Crypto';
import { Ionicons } from '@expo/vector-icons';

// Style and constants import
import tw from 'tailwind-react-native-classnames';
import { GET_LIST } from '../constants/endpoint';

// Other imports
import axios from 'axios';
import useTheme from '../hooks/useTheme';

interface Props {}

const Table: React.FC<Props> = (props) => {
    const { } = props;

    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);

    const { colors } = useTheme();

    useEffect(() => {
        // Fetch data from the api
        const fetchData = () => {
            setLoading(true);

            axios.get(GET_LIST)
                .then((res => {
                    setLoading(false);
                    setData(res.data);
                }))
                .catch((err) => {
                    console.log('Err', err);
                    setLoading(false);
                })
        }
        
        fetchData();
    }, []);

    const closeModal = () => {
        setModal(!modal);
    }

    // Flatlist Header
    const renderHeader = () => {
        return (
            <View>
                {/* Title */}
                <View>
                    <Text style={[tw`text-2xl mt-4`, {fontFamily: 'Semibold', color: colors.text}]}>Markets</Text>
                </View>

                {/* Sort/Filter config */}
                <View style={tw`flex-row justify-between w-full h-7 mt-4`}>
                    <View style={tw`w-2/4 items-start flex-row`}>
                        <TouchableOpacity style={[tw`w-3/12 h-full justify-center items-center rounded-2xl mr-3`, { backgroundColor: colors.primary }]} activeOpacity={1}>
                            <Text style={{ fontFamily: 'Semibold', color: colors.text }}>All</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[tw`w-3/12 h-full justify-center items-center rounded-2xl`, { backgroundColor: colors.primary }]} activeOpacity={1}>
                            <Ionicons name="star" size={15} color={colors.text}/>
                        </TouchableOpacity>
                    </View>

                    <View style={tw`w-2/4 items-end justify-center`}>
                        <TouchableOpacity style={[tw`w-8/12 bg-gray-100 rounded-2xl justify-center items-center h-full`, { backgroundColor: colors.primary }]} activeOpacity={0.5} onPress={closeModal}>
                            <Text style={{ fontFamily: 'Semibold', color: colors.text }}>
                                Market Cap
                                <Ionicons name="arrow-down" size={16}/>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    // Flatlist empty
    const renderEmpty = () => (
        <View style={tw`mt-10`}> 
            <ActivityIndicator size="large" color="#000"/>
        </View>
    )
    
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
                wallet={true}
            />
        )
    }

    return (
        <View>
            <View style={[tw`flex w-full h-full rounded-3xl mt-2 pt-0 pl-4 pr-4`, { backgroundColor: colors.secondary}]}>
                <View>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        ListEmptyComponent={renderEmpty}
                        ListHeaderComponent={renderHeader}
                        keyExtractor={(item) => 'key' + item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </View>
    );
}

export default Table;