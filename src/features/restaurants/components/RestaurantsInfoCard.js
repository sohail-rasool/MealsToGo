import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { startSVG } from "../../../../assets/star";
import { openSvg } from "../../../../assets/open";
import { View, StyleSheet, Image } from "react-native";

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

const AddressInfo = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const ClosedText = styled.Text`
  color: ${(props) => props.theme.colors.ui.error};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Rating = styled.View`
  flex-direction: row;
  margin-bottom: ${(props) => props.theme.space[1]};
`;

const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
`;

const CoverImg = styled(Card.Cover)`
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const styles = StyleSheet.create({
  sectionRating: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: 'center'
  },
  iconSize:{
    height:15,
    width:15
  },
  metaInfoWrap:{
    flexDirection: 'row',
    gap:8,
    alignItems: 'center'
  }
});

const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    icon='https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      "https://picsum.photos/seed/picsum/200/300",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily=true,
  } = restaurant;
  const ratingArr = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard>
      <CoverImg source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
        <View style={styles.sectionRating}>
          <Rating>
            {ratingArr?.map((item, index) => (
              <SvgXml key={index} xml={startSVG} width="20px" height="20px" />
            ))}
          </Rating>
          <View style={styles.metaInfoWrap}>
            {isOpenNow && <SvgXml xml={openSvg} width="20px" height="20px" />}
            {isClosedTemporarily && <ClosedText>Close Temporarily</ClosedText>}
            <Image style={styles.iconSize} source={{uri: icon}} />
          </View>
        </View>
        <AddressInfo>{address}</AddressInfo>
      </Card.Content>
    </RestaurantCard>
  );
};

export default RestaurantsInfoCard;
