import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Searchbar placeholder="Search" />
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
  container: { flex: 1, paddingTop: StatusBar.currentHeight },
  searchContainer: {
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
