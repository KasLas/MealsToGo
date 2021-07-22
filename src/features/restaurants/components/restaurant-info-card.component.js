import React from "react";
// import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: ${(p) => p.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(p) => p.theme.colors.bg.primary};
  padding: ${(p) => p.theme.space[2]};
`;

const Title = styled.Text`
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
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
