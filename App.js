import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <View style={styles.searchContainer}>
          <Text>Search</Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.text}>List</Text>
          <Text>List</Text>
        </View>
        <ExpoStatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "green",
    padding: 16,
  },
  listContainer: {
    flexGrow: 1,
    backgroundColor: "blue",
    padding: 16,
  },
  text: {
    backgroundColor: "yellow",
  },
});
