// Component import
import React from 'react';
import { SafeAreaView, Text, StatusBar, Platform } from 'react-native';
import PortfolioCard from '../components/PortfolioCard';

// Style and constants import
import tw from 'tailwind-react-native-classnames';
import Header from '../components/Header';
import useTheme from '../hooks/useTheme';

// Other imports

interface Props {}

const Wallet: React.FC<Props> = (props) => {
    const { } = props;
    const { colors } = useTheme();

    return (
        <SafeAreaView style={[tw`flex h-full`, { marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,  backgroundColor: colors.primary }]}>
            <Header title="Portfolio" portfolio={true}/>
            <PortfolioCard />
        </SafeAreaView>
    );
}

export default Wallet;