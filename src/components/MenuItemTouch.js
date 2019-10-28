import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const MenuItemTouch = ({
  style,
  icon,
  text,
  navigateTo,
  showArrow,
  navigation,
  onTouch,
}) => {
  const onMainPress = () => {
    if (navigateTo) {
      navigation.navigate(navigateTo);
    } else if (onTouch) {
      onTouch();
    }
  };

  return (
    <MainContainer onPress={onMainPress} style={style}>
      {icon ? <Icon name={icon} /> : null}
      <Text>{text}</Text>
    </MainContainer>
  );
};

const MainContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;
  margin-top: 30px;
`;

const IconRight = styled.Image`
  height: 16px;
  width: 16px;
`;
export default MenuItemTouch;
