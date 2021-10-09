// Component imports
import React, { useState } from 'react';
import MyTabs from './navigation';

// Others
import AppLoading from 'expo-app-loading';
import useFonts from './hooks/useFonts';
import { NavigationContainer } from '@react-navigation/native';

interface Props { }

const App: React.FC<Props> = (props) => {

  const { } = props;
  const [loading, setLoading] = useState<boolean>(false);

  // Cache fonts
  const fontLoading = async () => {
    await useFonts();
  }

  // Splash screen
  if (!loading) {
    return (
      <AppLoading startAsync={fontLoading} onFinish={() => setLoading(true)} onError={() => {}} />
    )
  }

  // Render app
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )

}

export default App;