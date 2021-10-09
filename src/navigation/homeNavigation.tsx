import React from 'react';
import { navigation } from '../constants/homeNavigation';
import { createStackNavigator } from '@react-navigation/stack';

interface Props {}

const HomeNavigation: React.FC<Props> = ({ }) => {
    const Stack = createStackNavigator();

    const horizontalAnimation = {
        cardStyleInterpolator: ({ current, layouts }: {current: any, layouts: any}) => {
            return {
                cardStyle: {
                    transform: [
                    {
                        translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [layouts.screen.width, 0],
                        }),
                    },
                    ],
                },
                tabBarVisible: false
            };
        },
    };

    return (
        <Stack.Navigator initialRouteName='Explore' screenOptions={ { headerShown: false } }>
            {
                navigation.map((route, index) => {
                    if (route.name === 'search') {
                        return <Stack.Screen key={index} name={route.name} component={route.component} options={horizontalAnimation}/>
                    }
                    return <Stack.Screen key={index} name={route.name} component={route.component} />
                })
            }
        </Stack.Navigator>
    )
}

export default HomeNavigation;