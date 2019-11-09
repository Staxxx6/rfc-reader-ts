import React, { Component } from "react";
import navStyles from "../../../styles/navStyles";
import { Text, View } from "react-native";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

class RfcItem extends Component {
  static navigationOptions = {
    title: "RfcItem",
    ...navStyles,
  };

  render() {
    const { RFC, loading } = this.props;
    if (loading) return null;
    return (
      <View>
        <Text>{RFC.name}</Text>
        <Text>{RFC.number}</Text>
        <Text>{RFC.content}</Text>
      </View>
    );
  }
}

const RfcItemQuery = gql`
  query RFC($id: ID!) {
    RFC(id: $id) {
      name
      number
      content
    }
  }
`;

export default graphql(RfcItemQuery, {
  props: ({ data }) => ({ ...data }),
  options: ({ navigation }) => ({
    variables: {
      id: navigation.state.params.id,
    },
  }),
})(RfcItem);
