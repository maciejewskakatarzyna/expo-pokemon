import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "../components/Themed";
import { useRouter, useSearchParams } from "expo-router";

type PokeProps = {
  id: string;
  name: string;
  imgURL?: string;
  types: string[];
};

const PokeItem = ({}) => {
  const router = useSearchParams();

  console.log(router);
  return (
    <View>
      <Text>Item</Text>
    </View>
  );
};

export default PokeItem;

const styles = StyleSheet.create({
  pokeItem: {
    backgroundColor: "rgb(229, 231, 235)",
    flex: 1,
    minWidth: 150,
    maxWidth: 150,
    height: 200,
    alignItems: "center",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
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
