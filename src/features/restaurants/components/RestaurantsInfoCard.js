import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  color: ${(props)=>props.theme.colors.ui.primary};
  font-family: ${(props)=>props.theme.fonts.heading};
`;

const RestaurantCard = styled(Card)`
  padding: ${(props)=>props.theme.space[3]};
`;

const CoverImg = styled(Card.Cover)`
  margin-bottom: ${(props)=>props.theme.space[3]};
`;

const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    icon,
    photos = [
      "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?size=626&ext=jpg&ga=GA1.1.36033625.1699248272&semt=sph",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard>
      <CoverImg source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

export default RestaurantsInfoCard;
