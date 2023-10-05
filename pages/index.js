import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SunSVG from "../src/assets/Sun";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
        <SunSVG />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
