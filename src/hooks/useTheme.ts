import { useSelector } from 'react-redux';
import { ApplicationState } from '../store';

// hook for theme colors
const useTheme = () => {
    const { theme } = useSelector((state: ApplicationState) => state.theme);
    
    const colors = {
        primary: theme === "dark" ? '#161A1E' : '#f3f4f6',
        secondary: theme === "dark" ? '#1E2026' :'#ffffff',
        text: theme === "dark" ? "#fff" : '#000',
    }

    return { theme, colors };
}

export default useTheme;