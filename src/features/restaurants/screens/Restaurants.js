import React from "react";
import ReactSearchBar from "../../../components/common/ReactSearchBar";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import RestaurantsInfo from "../components/RestaurantsInfoCard";


const currentHeight = StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: currentHeight
  },
  lists: {
    flex: 1,
    backgroundColor: "blue",
    height: "100%",
    width: "100%",
    padding:10
  },
});

const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ReactSearchBar />
      <View style={styles.lists}>
        <RestaurantsInfo />
      </View>
    </SafeAreaView>
  );
};

export default RestaurantsScreen;
