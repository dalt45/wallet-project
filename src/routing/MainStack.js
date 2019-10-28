import Balance from '../pages/Balance';
import SideMenu from '../pages/SideMenu'
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

const MainStack = createDrawerNavigator(
  {
    Balance: {
      screen: Balance,
      navigationOptions: () => ({
        header: null,
      }),
    },
    SideMenu: {
      screen: SideMenu,
    },
  },
  {
    initialRouteName: 'Balance',
    transitionConfig: getSlideFromRightTransition,
    // override android pushing header left
    headerLayoutPreset: 'center',
    contentComponent: SideMenu,
    minSwipeDistance: 1,
  },
);

export default createAppContainer(MainStack);
