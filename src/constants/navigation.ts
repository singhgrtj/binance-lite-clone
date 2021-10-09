// Screen imports
import HomeNavigation from "../navigation/homeNavigation";
import Wallet from "../screens/WalletScreen";
import Trade from "../screens/TradeScreen";

// Other imports
import NavigationType from "../interfaces/navigation";

const navigation: NavigationType[] = [
    {
        name: 'home',
        component: HomeNavigation,
        label: () => { return null }
    },
    {
        name: 'trade',
        component: Trade,
        label: () => { return null }
    },
    {
        name: 'wallet',
        component: Wallet,
        label: () => { return null }
    }
]

export { navigation };