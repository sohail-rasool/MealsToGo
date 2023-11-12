import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { logger } from "../../utils/helper";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchbar: {
    marginVertical: 10,
  },
});

const ReactSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  logger("searchQuery", searchQuery);
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.searchbar}
    />
  );
};

export default ReactSearchBar;
