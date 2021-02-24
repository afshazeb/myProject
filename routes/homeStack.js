import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import reviewDetails from '../screens/reviewDetails';

const screens = {
Home: {
    screen: Home
},
reviewDetails: {
    screen: reviewDetails
}
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
