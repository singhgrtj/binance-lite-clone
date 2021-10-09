// Screen imports
import Home from "../screens/HomeScreen";
import Search from "../screens/SearchScreen";

// Other imports
import NavigationType from "../interfaces/navigation";

const navigation: NavigationType[] = [
    {
        name: 'Home',
        component: Home,
        label: () => { return null }
    },
    {
        name: 'search',
        component: Search,
        label: () => { return null }
    }
]

export { navigation };