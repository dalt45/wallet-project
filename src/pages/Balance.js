import React, {useState} from 'react';
import {BalanceHeader, CarrouselMini} from '@components';
import {StyleSheet} from 'react-native';
import BalanceMain from './balance/BalanceMain';
import styled from 'styled-components/native';
import {
  FAB,
  Portal,
  Provider,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Drawer,
} from 'react-native-paper';

const Balance = props => {
  const [fatherWidth, setFatherWidth] = useState(undefined);
  const [fatherHeight, setFatherHeight] = useState(undefined);
  const [openFab, setOpenFab] = useState(false);

  console.log;

  const getDimensions = event => {
    const {width, height} = event.nativeEvent.layout;
    setFatherWidth(width);
    setFatherHeight(height);
  };

  return (
    <Container>
      <HeaderContainer>
        <BalanceHeader props={props} />
      </HeaderContainer>
      <BalanceMainContainer onLayout={event => getDimensions(event)}>
        <BalanceMain fatherWidth={fatherWidth} fatherHeight={fatherHeight} />
      </BalanceMainContainer>
      <SubtitleContainer>
        <Subtitle>Paga tus Servicios</Subtitle>
      </SubtitleContainer>
      <CarrouselContainer>
        <CarrouselMini />
      </CarrouselContainer>
      <Provider>
        <Portal>
          <FAB.Group
            open={openFab}
            icon={'add'}
            accesibilityLabel={'Menu'}
            actions={[
              {
                icon: 'add',
                label: 'Añadir Saldo',
                onPress: () => console.log('Pressed star'),
              },
              {
                icon: 'monetization-on',
                label: 'Pagar',
                onPress: () => console.log('Pressed email'),
              },
            ]}
            onStateChange={({open}) => setOpenFab(open)}
            onPress={() => {
              if (openFab) {
                // do something if the speed dial is open
              }
            }}
            fabStyle={styles.fab}
          />
        </Portal>
      </Provider>
    </Container>
  );
};
const styles = StyleSheet.create({
  fab: {
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#FC4C01',
  },
});

const Container = styled.View`
  flex: 1;
`;
const HeaderContainer = styled.View``;
const BalanceMainContainer = styled.View`
  height: 20%;
`;

const CarrouselContainer = styled.View`
  height: 17%;
`;

const Subtitle = styled.Text`
  font-size: 18px;
  color: #2ba6ea;
`;
const SubtitleContainer = styled.Text`
  padding-left: 30px;
  margin-top: 20px;
`;

export default Balance;
