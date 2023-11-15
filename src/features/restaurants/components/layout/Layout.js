import React from 'react'
import {SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

const currentHeight = StatusBar?.currentHeight;

const AppContainer = styled(SafeAreaView)`
  flex: 1;
  ${currentHeight && `margin-top: ${currentHeight}px`};
`;


const Layout = ({children}) => {
  return (
    <AppContainer>{children}</AppContainer>
  )
}

export default Layout