// Component import
import React from 'react'
import { SafeAreaView, Platform, StatusBar } from 'react-native';
import SearchResults from '../components/SearchResults';

// Style and constants import
import tw from 'tailwind-react-native-classnames';
import useTheme from '../hooks/useTheme';

// Other imports

interface Props {}

const Search: React.FC<Props> = (props) => {
    const {} = props;

    const { colors, theme } = useTheme();
    
    return (
        <SafeAreaView style={[tw`flex h-full bg-white pb-10`, { marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, backgroundColor: colors.secondary }]}>
            <StatusBar barStyle={theme === "dark" ? "light-content" : "dark-content"} hidden={false} backgroundColor={colors.primary} translucent={true}/>
            <SearchResults />
        </SafeAreaView>
    );
}

export default Search;