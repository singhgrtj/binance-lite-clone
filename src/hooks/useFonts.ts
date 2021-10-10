import * as Font from 'expo-font';
import fonts from '../constants/fonts';

// hook for font caching in app loading
const useFonts = async () => {
    await Font.loadAsync(fonts)
}

export default useFonts;