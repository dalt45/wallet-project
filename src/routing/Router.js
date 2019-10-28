import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import MainStack from './MainStack';

const Router = createSwitchNavigator(
  {
    MainStack,
  },
  {
    initialRouteName: 'MainStack',
  },
);

export default createAppContainer(Router);
