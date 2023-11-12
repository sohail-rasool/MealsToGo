import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { logger } from "../../utils/helper";
import styled from "styled-components/native";

const AppSearchbar = styled(Searchbar)`
  margin-top:  ${(props)=>props.theme.space[2]};
`;

const ReactSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  logger("searchQuery", searchQuery);
  return (
    <AppSearchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default ReactSearchBar;
