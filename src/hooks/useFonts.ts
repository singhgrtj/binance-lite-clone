import * as Font from 'expo-font';
import fonts from '../constants/fonts';

const useFonts = async () => {
    await Font.loadAsync(fonts)
}

export default useFonts;