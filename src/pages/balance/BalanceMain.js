import React, {useState} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native/dist/styled-components.native.esm';

const BalanceMain = ({fatherWidth = 200, fatherHeight = 100}) => {
  return (
    <Container>
      <BackgroundContainer>
        <RectangleTop fatherHeight={fatherHeight} fatherWidth={fatherWidth} />
        <TriangleCorner fatherHeight={fatherHeight} fatherWidth={fatherWidth} />
      </BackgroundContainer>
      <TextContainer>
        <BalanceSmall>Tu saldo es:</BalanceSmall>
        <BalanceBig>$200.00 MXN</BalanceBig>
      </TextContainer>
    </Container>
  );
};

const Container = styled.View``;

const BackgroundContainer = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const TextContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const RectangleTop = styled.View`
  width: ${props => props.fatherWidth * 0.7}
  height: ${props => props.fatherHeight * 0.6};
  background-color: #fc4c01;
  align-self: center;
  border-bottom-right-radius: 10px;
`;

const RectangleMiddle = styled.View`
  width: ${props => props.fatherWidth * 0.7}
  height: ${props => props.fatherHeight * 0.1428};
  background-color: aqua;
  align-self: center;
`;

const TriangleCorner = styled.View`
  position: absolute;
  top: ${props => props.fatherHeight * 0.6};
  left: ${props => props.fatherWidth * 0.15};
  width: 0px;
  height: 0px;
  background-color: transparent;
  align-self: center;
  border-style: solid;
  border-right-width: ${props => props.fatherWidth * 0.7 - 10 - 8};
  border-top-width: ${props => props.fatherHeight * 0.4 - 1};
  border-left-width: 10px;
  border-bottom-width: 1px;
  border-top-color: #fc4c01;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-left-color: #fc4c01;;
  border-bottom-left-radius: 10px;
`;

const BalanceBig = styled.Text`
  font-size: 40px;
  color: white;
`;

const BalanceSmall = styled.Text`
  font-size: 12px;
  color: white;
`;

export default BalanceMain;
