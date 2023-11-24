import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React from "react";
import GlobalStyles from "../components/GlobalStyles";
import { AntDesign } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <View style={{ flexDirection: "row" }}>
        <AntDesign name="search1" size={24} color="#ff1a1a" />
        <TextInput style={{ color: "red" }} placeholder="Search Restaurant" />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({});
