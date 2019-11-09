import React, { Component } from "react";
import Test from "./layouts/TestLayout/test.component";
import { StyleSheet, Text, View, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import navStyles from "./styles/navStyles.js";
import RfcList from "./components/RFC/RfcList";
import RfcItem from "./components/RFC/RfcItem";

class Home extends Component {
  static navigationOptions = {
    title: "HomeTitle",
    ...navStyles,
  };

  render() {
    return (
      <View style={styles.container}>
        <RfcList {...this.props} />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Test: {
    screen: Test,
  },
  RfcItem: {
    screen: RfcItem,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default createAppContainer(AppNavigator);
