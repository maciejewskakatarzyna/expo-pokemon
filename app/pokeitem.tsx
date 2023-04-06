import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import { View } from "../components/Themed";
import { useSearchParams } from "expo-router";

const PokeItem = () => {
  const { name, imgURL, types } = useSearchParams();

  return (
    <View style={styles.pokeItem}>
      <Text style={styles.name}>{name}</Text>
      {imgURL !== "undefined" ? (
        <Image style={styles.image} source={{ uri: imgURL }} />
      ) : (
        <View style={styles.noImage} />
      )}
      {types && <Text style={styles.types}>Types: {types.join(", ")}</Text>}
    </View>
  );
};

export default PokeItem;

const styles = StyleSheet.create({
  pokeItem: {
    backgroundColor: "rgb(249, 250, 251)",
    flex: 1,
    maxWidth: "100%",
    height: "100%",
    alignItems: "center",
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  image: {
    width: 250,
    height: 250,
  },
  noImage: {
    width: 250,
    height: 250,
    backgroundColor: "#d7dae0",
  },
  types: {
    fontSize: 18,
    marginTop: 30,
  },
});
