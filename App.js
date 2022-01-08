import ResultScreen from './src/screens/ResultsScreen';
import SearchScreen from './src/screens/SearchScreen';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';


const navigator = createStackNavigator({
    Search: SearchScreen,
    ResultsShow: ResultScreen
},
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Search Screen'
  }
}
);


export default createAppContainer(navigator);