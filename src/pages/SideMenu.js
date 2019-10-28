import React from 'react';
import {SafeAreaView} from 'react-native';
import {MenuItemTouch} from '@components';

const SideMenu = props => {
  return (
    <SafeAreaView>
      <MenuItemTouch
        icon={'arrow-left'}
        onTouch={props.navigation.toggleDrawer}
      />
      <MenuItemTouch text={'Usuario'} />
      <MenuItemTouch text={'Logout'} />
    </SafeAreaView>
  );
};

export default SideMenu;
