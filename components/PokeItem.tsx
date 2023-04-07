import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import { View } from "./Themed";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PokeProps } from "./PokeList";

const PokeItem = ({ data }: PokeProps) => {
  const navigation = useNavigation();
  const { id, name, imgURL, types, evolvesFrom } = data;

  const handlePress = () => {
    navigation.navigate("pokeitem", {
      name,
      imgURL,
      types,
      evolvesFrom,
    });
  };

  return (
    <View style={styles.pokeItem}>
      <TouchableOpacity onPress={handlePress} style={styles.pokelink}>
        <Text style={styles.name}>{name}</Text>
        {imgURL ? (
          <Image style={styles.image} source={{ uri: imgURL }} />
        ) : (
          <View style={styles.noImage} />
        )}
        <Text style={styles.types}>Types: {types.join(", ")}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PokeItem;

const styles = StyleSheet.create({
  pokeItem: {
    backgroundColor: "rgb(229, 231, 235)",
    flex: 1 / 2,
    // borderColor: "red",
    // borderWidth: 1,
    height: 200,
    width: "100%",
    marginVertical: 8,
    marginHorizontal: 16,
  },
  pokelink: {
    padding: 20,
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  noImage: {
    width: 100,
    height: 100,
    backgroundColor: "#d7dae0",
  },
  types: {
    fontSize: 12,
    marginTop: 10,
  },
});
