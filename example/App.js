/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import BeautifulStateView from "react-native-beautiful-state-view";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <BeautifulStateView
          resizeMode="contain"
          image={require("./assets/marketing_.png")}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
