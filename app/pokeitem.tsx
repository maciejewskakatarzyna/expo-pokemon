import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import { View } from "../components/Themed";
import { useSearchParams } from "expo-router";

const PokeItem = () => {
  const { name, imgURL, types, evolvesFrom } = useSearchParams();

  return (
    <View style={styles.pokeItem}>
      <Text style={styles.name}>{name}</Text>
      {imgURL !== "undefined" ? (
        <Image style={styles.image} source={{ uri: imgURL }} />
      ) : (
        <View style={styles.noImage} />
      )}
      <View style={styles.description}>
        {types && (
          <Text style={styles.descriptionText}>
            <Text style={styles.bold}>Types: </Text> {types.join(", ")}
          </Text>
        )}
        <Text style={styles.descriptionText}>
          <Text style={styles.bold}>Evolves from: </Text>
          {evolvesFrom}
        </Text>
      </View>
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
  description: {
    backgroundColor: "rgb(249, 250, 251)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 30,
    marginTop: 30,
  },
  descriptionText: {
    fontSize: 18,
  },
  bold: {
    fontWeight: "bold",
  },
});
