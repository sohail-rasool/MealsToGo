import React from "react";
import { Card } from "react-native-paper";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

const Title = styled.Text`
  color: blue;
`;

const styles = StyleSheet.create({
  card: {
    padding: 15,
  },
  coverImg: {
    marginBottom: 20,
  },
});

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
    <Card style={styles.card}>
      <Card.Cover style={styles.coverImg} source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
    </Card>
  );
};

export default RestaurantsInfoCard;
