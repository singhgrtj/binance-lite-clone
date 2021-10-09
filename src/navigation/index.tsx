// Screen imports
import React from 'react';
import { View } from 'react-native';

// Other imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigation } from '../constants/navigation';
import { Ionicons } from '@expo/vector-icons';
import NavigationType from '../interfaces/navigation';
import tw from 'tailwind-react-native-classnames';
import useTheme from '../hooks/useTheme';


interface Props {}

const MyTabs: React.FC<Props> = (props) => {
    const { } = props;
    const Tab = createBottomTabNavigator();
    const { colors, theme } = useTheme();

    return (
        <Tab.Navigator initialRouteName="home" screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true, tabBarStyle: {
            backgroundColor: colors.secondary,
            borderTopColor: colors.secondary,
        } }}>
            {
                navigation.map((tab: NavigationType, key: number) => (
                    <Tab.Screen key={key} name={tab.name} component={tab.component}
                        listeners={{
                            tabPress: (e) => {
                                if (tab.name === "trade") {
                                    e.preventDefault();
                                }
                            }
                        }}
                        options={{
                            tabBarIcon: ({ focused }) => {
                                return (
                                    tab.name === "home" ?
                                        <Ionicons name="stats-chart" color={focused ? (theme === "dark" ? "white" : "black") : (theme === "dark" ? "black" : "lightgray")} size={25} />
                                        :
                                        (
                                            tab.name === "trade" ?
                                                <View style={tw`w-8 h-8 justify-center items-center`}>
                                                    <View style={[tw`bg-yellow-400 w-full h-full rounded-md`, {transform:[{ rotate: '45deg'}]}]} />
                                                    <Ionicons
                                                            name={focused ? "swap-horizontal" : "swap-horizontal"}
                                                            color="#000"
                                                            size={23}
                                                            style={{ position: 'absolute'}}
                                                    />
                                                </View>
                                                :
                                                <Ionicons name="wallet" color={focused ? (theme === "dark" ? "white" : "black") : (theme === "dark" ? "black" : "lightgray")} size={25} />
                                        )
                                )
                            },
                            tabBarLabel: tab.label
                        }}
                    />
                ))
            }
        </Tab.Navigator>
    )
}

export default MyTabs;