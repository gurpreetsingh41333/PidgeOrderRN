import React from "react";
import { ScrollView, StyleSheet, View, StatusBar } from "react-native";

import Order from "./src/components/Order";
import { riders, orders } from "./src/fixtures/data";

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          {orders.map((order) => (
            <Order key={order.id} order={order} riders={riders} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
