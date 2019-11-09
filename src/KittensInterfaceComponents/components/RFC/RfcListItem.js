import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default class RfcListItem extends Component {
  render() {
    const { data } = this.props;
    const { navigate } = this.props.navigation;
    console.log("navigate", navigate);
    console.log("data.id", data.id);
    // onPress={() => navigate("RfcItem", { id: data.id })}
    return (
      <View style={styles.container}>
        <View style={styles.titleRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeLabel}>#{data.number}</Text>
          </View>
          <Text
            onPress={() => navigate("RfcItem", { id: data.id })}
            style={styles.title}
          >
            {data.name}
          </Text>
        </View>
        <Text ellipsizeMode="tail" numberOfLines={7} style={styles.contentText}>
          {data.content}
        </Text>

        <View style={styles.additionalInfoRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeLabel}>#JWT</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeLabel}>#Auth</Text>
          </View>

          <View style={styles.badge}>
            <FontAwesomeIcon icon={faCoffee} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 30,
    maxWidth: 800,
    margin: 20,

    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 11.95,
  },
  titleRow: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  additionalInfoRow: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
  },
  badge: {
    backgroundColor: "red",
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginRight: 5,
  },
  badgeLabel: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    marginLeft: 5,
  },
  contentText: {
    fontSize: 14,
    // lineHeight: 2,
  },
  contentContainer: {},
});
