import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather, MaterialIcons, FontAwesome } from "@expo/vector-icons";

import userPic from "./../../assets/avatar.png";

const Order = ({ order, riders }) => {
  const {
    pickup: { address_line_1 = "", address_line_2 = "", city = "", state = "" },
    drop: {
      address_line_1: drop_address_line_1 = "",
      address_line_2: drop_address_line_2 = "",
      city: drop_city = "",
      state: drop_state = "",
    },
    id,
  } = order;
  const completePickupAddress =
    address_line_1 + "," + address_line_2 + "," + city + "," + state;
  const completeDropAddress =
    drop_address_line_1 +
    "," +
    drop_address_line_2 +
    "," +
    drop_city +
    "," +
    drop_state;
  const rider = riders.find((rider) => rider.trip === id);

  return (
    <View style={[styles.mt2, styles.pr1]}>
      <View style={styles.row}>
        <View
          style={[
            styles.col,
            styles.justifySpaceBetween,
            styles.alignCenter,
            styles.width20,
          ]}
        >
          <MaterialIcons name="radio-button-checked" size={24} color="green" />
          <View style={styles.verticalRuleDashed} />
          <MaterialIcons name="radio-button-checked" size={24} color="purple" />
        </View>
        <View style={[styles.col, styles.justifySpaceBetween, styles.width80]}>
          <View>
            <Text style={styles.fontBold}>Pickup from</Text>
            <Text style={styles.fontColor}>{completePickupAddress}</Text>
          </View>
          <View>
            <Text style={styles.fontBold}>Drop to</Text>
            <Text style={styles.fontColor}>{completeDropAddress}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.pl5, styles.pt2]}>
        <View style={[styles.row, styles.justifySpaceBetween, styles.ma1]}>
          <Text style={[styles.fontBold, styles.fontSize2]}>
            On way to Pickup
          </Text>
          <Text>
            Package ID <Text style={styles.fontBold}>{id}</Text>
          </Text>
        </View>
        <View style={styles.horizontalRule} />
        <View
          style={[
            styles.row,
            styles.justifySpaceBetween,
            styles.alignCenter,
            styles.ma1,
          ]}
        >
          <View style={[styles.row, styles.justifyCenter, styles.alignCenter]}>
            <Avatar rounded size="large" source={userPic} />
            <Text style={[styles.fontBold, styles.pl2]}>{rider.name}</Text>
          </View>
          <View>
            <Feather name="phone-call" size={24} color="purple" />
          </View>
        </View>
        <View style={styles.horizontalRule} />
        <View style={[styles.row, styles.justifySpaceBetween, styles.ma1]}>
          <View style={styles.justifyCenter}>
            <Text>Pickup by</Text>
            <Text style={styles.fontBold}>08:40pm</Text>
          </View>
          <View style={styles.verticalRule} />
          <View style={styles.justifyCenter}>
            <Text>Pickup OTP</Text>
            <View style={[styles.row, styles.justifySpaceBetween]}>
              <Text style={styles.fontBold}>5467</Text>
              <FontAwesome name="share-square-o" size={24} color="purple" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: "row" },
  col: { flexDirection: "column" },
  justifySpaceBetween: { justifyContent: "space-between" },
  justifyCenter: { justifyContent: "center" },
  alignCenter: { alignItems: "center" },
  fontBold: { fontWeight: "bold" },
  fontColor: { color: "#929090e8" },
  fontSize2: { fontSize: hp("2%") },
  ma1: { margin: hp("1%") },
  mt2: { marginTop: hp("2%") },
  pl2: { paddingLeft: hp("2%") },
  pl5: { paddingLeft: hp("5%") },
  pt2: { paddingTop: hp("2%") },
  pr1: { paddingRight: hp("1%") },
  width20: { width: wp("20%") },
  width80: { width: wp("80%") },
  verticalRuleDashed: {
    height: hp("8%"),
    width: wp("0.1%"),
    borderColor: "#929090e8",
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 1,
    margin: hp("1%"),
  },
  verticalRule: {
    height: hp("8%"),
    width: 1,
    backgroundColor: "#ececec",
  },
  horizontalRule: {
    borderBottomColor: "#ececec",
    borderBottomWidth: 1,
  },
});

export default Order;
