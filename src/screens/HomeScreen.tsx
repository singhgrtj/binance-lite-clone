// Component import
import React, { useEffect } from 'react';
import { SafeAreaView, Text, StatusBar, Platform, ScrollView } from 'react-native';
import Header from '../components/Header';
import HomeCard from '../components/HomeCard';

// Style and constants import
import tw from 'tailwind-react-native-classnames';

// Other imports
import useTheme from '../hooks/useTheme';

interface Props { }

const Home: React.FC<Props> = (props) => { 
    const { } = props;

    const { theme, colors }  = useTheme();

    return (
        <SafeAreaView style={[tw`flex h-full pb-10`, { marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, backgroundColor: colors.primary }]}>
            <Header title="Binance" portfolio={false}/>
            <HomeCard />
        </SafeAreaView>
    );
}

export default Home;