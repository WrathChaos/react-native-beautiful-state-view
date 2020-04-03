/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { StatusBar, SafeAreaView } from "react-native";

import BeautifulStateView from "./lib/BeautifulStateView";

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <BeautifulStateView
          image={require("./assets/marketing_.png")}
          resizeMode="contain"
        />
      </SafeAreaView>
    </>
  );
};

export default App;
