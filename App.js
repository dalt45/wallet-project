/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import Router from './src/routing/Router';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    text: 'white',
  },
};

const App: () => React$Node = () => {
  return (
    <PaperProvider theme={theme}>
      <MainContainer>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          networkActivityIndicatorVisible={true}
        />
        <Router />
      </MainContainer>
    </PaperProvider>
  );
};

const MainContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding-top: ${0};
`;

export default App;
