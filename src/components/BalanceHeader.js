import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar} from 'react-native-paper';

const appBar = props => {
  return (
    <React.Fragment>
      <View style={styles.containerBackground} />
      <Appbar.Header style={styles.headerAppBar}>
        <Appbar.Action
          icon="menu"
          onPress={() => {
            props.props.navigation.toggleDrawer();
          }}
        />
        <Appbar.Content title="Clip" titleStyle={styles.titleBar} />
      </Appbar.Header>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  headerAppBar: {
    backgroundColor: 'transparent',
  },
  containerBackground: {
    backgroundColor: '#FC4C01',
    position: 'absolute',
    width: '70%',
    height: '100%',
    alignSelf: 'center',
  },
  titleBar: {
    color: 'white',
  },
});

export default appBar;
