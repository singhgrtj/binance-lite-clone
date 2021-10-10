// Component import
import React, { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StatusBar, Text } from 'react-native';

// Style and constants import
import tw from 'tailwind-react-native-classnames';

// Other imports
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { onToggle } from '../store';
import useTheme from '../hooks/useTheme';

interface Props {
    title: string;
    portfolio: boolean;
}

const Header: React.FC<Props> = (props) => {
    const { title, portfolio } = props;

    const navigation = useNavigation<any>();
    const dispatch = useDispatch();
    const { theme, colors } = useTheme();

    const switchTheme = () => {
        dispatch(onToggle());
    }

    const handleSearch = () => {
        navigation.navigate('search');
    }

    return (
        <View style={tw`p-2 justify-center items-center`}>
            <StatusBar barStyle={theme === "dark" ? "light-content" : "dark-content"} hidden={false} backgroundColor={colors.primary} translucent={true}/>
            <View style={[tw`flex flex-row h-8 w-full bg-gray-100 justify-between`, {justifyContent: portfolio ? 'center' : 'space-between', backgroundColor: colors.primary}]}>
                {/* User icon */}
                {
                    !portfolio ?
                        <View>
                            <Ionicons name="person-circle-outline" color="#a9a9a9" size={26}/>
                        </View>
                        :
                        null
                }
                {/* Binance text logo */}
                <View style={tw`flex-row justify-center items-center`}>
                    <Text style={[tw`mx-1 text-lg`, { color: theme === "dark" ? "#fff" : "#000", fontFamily: 'Semibold' }]}>{title}</Text>
                    {
                        !portfolio ?
                            <Text style={[tw`text-lg`, { color: '#ffd700', fontFamily: 'Regular' }]}>Lite</Text>
                            :
                            null
                    }
                </View>

                {/* Search icon */}
                {
                    !portfolio ?
                        <View style={tw`flex-row`}>
                            <Ionicons name="search-outline" color="#a9a9a9" size={26} onPress={handleSearch} style={tw`mr-2`}/>
                            <Ionicons name="contrast-outline" color="#a9a9a9" size={26} onPress={switchTheme} />
                        </View>
                        :
                        null
                }
            </View>
        </View>
    );
}

export default Header