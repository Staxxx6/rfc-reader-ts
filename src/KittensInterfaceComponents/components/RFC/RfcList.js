import { graphql } from "react-apollo";
import gql from "graphql-tag";
import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import RfcItemInterface from "../../../interfaces/RfcItem.interface";
import RfcListItem from "./RfcListItem";

function RfcList(props) {
  const { allRFCs, loading } = props;
  const { navigate } = props.navigation;

  if (loading) return null;
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.container}
        data={allRFCs}
        renderItem={({ item }) => <RfcListItem {...props} data={item} />}
        keyExtractor={item => item.id}
      ></FlatList>
    </View>
  );
}

const RfcListQuery = gql`
  {
    allRFCs {
      id
      name
      number
      content
    }
  }
`;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default graphql(RfcListQuery, {
  props: ({ data }) => ({ ...data }),
})(RfcList);
