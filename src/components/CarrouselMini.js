import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {Surface, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const listOfServices = [
  {icon: 'amazon', name: 'Amazon', color: '#F99303'},
  {icon: 'app-store'},
  {icon: 'xbox', color: '#6EC62B'},
  {icon: 'uber', color: '#068688'},
  {icon: 'spotify', color: '#1DD05E'},
  {icon: 'steam'},
];
const CarrouselMini = () => {
  return (
    <Container>
      <Surface style={styles.surface}>
        <ItemScroll horizontal>
          {listOfServices.map((item, index) => {
            return (
              <IconContainer key={index}>
                <Icon
                  name={item.icon}
                  size={40}
                  color={item.color ? item.color : 'white'}
                />
              </IconContainer>
            );
          })}
        </ItemScroll>
      </Surface>
    </Container>
  );
};

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    borderRadius: 10,
  },
});

const Container = styled.View`
  margin-top: 20px;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  align-items: center;
  justify-content: center;
`;

const IconContainer = styled.TouchableHighlight`
  margin-left: 7px;
  height: 50px;
  width: 50px;
  background-color: black;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const ItemScroll = styled.ScrollView`
  flex: 1;
`;

export default CarrouselMini;
