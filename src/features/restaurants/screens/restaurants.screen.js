import React from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  /* This is a nice way to return a dynamic padding-top without checking the platform.OS */
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const ListContainer = styled.View`
  flex-grow: 1;
  background-color: blue;
  padding: 16px;
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <ListContainer>
        <RestaurantInfoCard />
      </ListContainer>
    </SafeArea>
  );
};
