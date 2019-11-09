import { Text, View } from "react-native";
import * as React from "react";

// import { graphql } from "react-apollo";
// import gql from "graphql-tag";

import navStyles from "../../styles/navStyles.js";

class TestComponent extends React.Component {
  static navigationOptions = {
    title: "Test",
    ...navStyles,
  };
  render() {
    return (
      <View>
        <Text>Another page</Text>
      </View>
    );
  }
}

// const RfcListQuery = gql`
//   {
//     allRFCs {
//       id
//       name
//       number
//     }
//   }
// `;

// export const RfcListContainer = graphql(RfcListQuery, {
//   props: ({ data }) => ({ ...data }),
//   // @ts-ignore
// })(TestComponent);

export default TestComponent;
