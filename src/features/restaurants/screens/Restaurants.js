import React from "react";
import ReactSearchBar from "../../../components/common/ReactSearchBar";
import { View, FlatList } from "react-native";
import RestaurantCard from "../components/RestaurantsInfoCard";
import styled from "styled-components/native";
import Layout from "../components/layout/Layout";


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
    <Layout>
      <ReactSearchBar />
      <ListView
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
        renderItem={({ item }) => <RestaurantCard />}
        ItemSeparatorComponent={<ViewSpace />}
      />
      {/* <RestaurantCard /> */}
    </Layout>
  );
};

export default RestaurantsScreen;
