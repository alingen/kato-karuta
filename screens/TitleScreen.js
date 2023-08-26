import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export function TitleScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>タイトル</Text>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate("Test")}
      >
        <View style={styles.box}>
          <Text style={styles.title}>もう一度さんぽをする</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#4ca6a6",
  },
  touchable: {
    alignItems: "center",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  box: {
    width: "80%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    width: "80%",
    alignSelf: "center",
    resizeMode: "contain",
  },
});
