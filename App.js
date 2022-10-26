import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    // View, text Component
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Zadatak</Text>
      </View>

      {/* Flexbox layout */}
      <View style={styles.jumbotron}>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Za zadaću bilo je preurediti postojeću aplikaciju. </Text>
        </View>
      </View>

      {/* Image component */}
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      
      {/* button component */}
      <Button title="Predaj zadatak" onPress={() => Alert.alert("Zadatak predan.")} />

      {/* touchable opacity component */}
      <TouchableOpacity
        style={styles.resolvedContainerStyle}
        onPress={() => Alert.alert("TouchableOpacity pressed")}
      >
        <Text style={styles.textStyle}>Touchable opacity</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    paddingTop: 10,
    backgroundColor: "lightblue",
  },
  header: {
    borderBottomWidth: 2,
    borderStyle: "dotted",
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
  jumbotron: {
    flexDirection: "row",
    margin: 20,
    textAlign: "center"
  },
  tinyLogo: {
    margin: 10,
    width: 100,
    height: 100,
    
  },
  resolvedContainerStyle: {
    margin: 20,
    backgroundColor: "lightgray",
    padding: 20,
    textAlign: "center",
    borderColor: "gray",
    borderWidth: 1,
  },
  textStyle: {
    fontSize: 20,
    color: "black",
  },
});
