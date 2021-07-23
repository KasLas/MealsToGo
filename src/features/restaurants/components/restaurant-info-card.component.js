import React from "react";
// import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const RestaurantCard = styled(Card)`
  background-color: ${(p) => p.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(p) => p.theme.colors.bg.primary};
  padding: ${(p) => p.theme.space[2]};
`;

const Address = styled.Text`
  font-family: ${(p) => p.theme.fonts.body};
  font-size: ${(p) => p.theme.fontSizes.caption};
`;

const Title = styled.Text`
  font-family: ${(p) => p.theme.fonts.heading};
  font-size: ${(p) => p.theme.fontSizes.title};
`;

const InfoContainer = styled.View`
  padding: ${(p) => p.theme.space[2]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  // Dummy data to style the component
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <InfoContainer>
        <Title>{name}</Title>
        <SvgXml xml={star} width={20} height={20} />
        <Address>{address}</Address>
      </InfoContainer>
    </RestaurantCard>
  );
};
