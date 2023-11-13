import React from "react";
import ReactSearchBar from "../../../components/common/ReactSearchBar";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import RestaurantCard from "../components/RestaurantsInfoCard";
import styled from "styled-components/native";

const currentHeight = StatusBar?.currentHeight;

const AppContainer = styled(SafeAreaView)`
  flex: 1;
  ${currentHeight && `margin-top: ${currentHeight}px`};
`;
const ListView = styled(FlatList)`
  padding: 16px;
`;

const ViewSpace = styled(View)`
  height: 1px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const RestaurantsScreen = () => {

  return (
    <AppContainer>
      <ReactSearchBar />
      <ListView
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
        renderItem={({ item }) => <RestaurantCard />}
        ItemSeparatorComponent={<ViewSpace />}
      />
      {/* <RestaurantCard /> */}
    </AppContainer>
  );
};

export default RestaurantsScreen;
