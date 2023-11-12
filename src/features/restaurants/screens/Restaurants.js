import React from "react";
import ReactSearchBar from "../../../components/common/ReactSearchBar";
import { View, SafeAreaView, StatusBar } from "react-native";
import RestaurantsInfo from "../components/RestaurantsInfoCard";
import styled from "styled-components/native";

const currentHeight = StatusBar?.currentHeight;

const AppContainer = styled(SafeAreaView)`
  flex: 1;
  ${currentHeight && `margin-top: ${currentHeight}px`};
`;
const ListView = styled(View)`
  flex: 1;
  height: 100%;
  width: 100%;
  padding: 10px;
`;

const RestaurantsScreen = () => {
  return (
    <AppContainer>
      <ReactSearchBar />
      <ListView>
        <RestaurantsInfo />
      </ListView>
    </AppContainer>
  );
};

export default RestaurantsScreen;
