import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, SafeAreaView, StatusBar } from "react-native";
import PokeItem from "./PokeItem";

export type PokeProps = {
  id: string;
  name: string;
  imgURL?: string;
  types: string[];
};

// const DATA: PokeProps[] = [
//   {
//     id: "1",
//     name: "First",
//     imgURL:
//       "https://static.wikia.nocookie.net/pokemony/images/5/56/Charmander.png/revision/latest/scale-to-width-down/1000?cb=20150825190042&path-prefix=pl",
//     types: ["fire"],
//   },
//   {
//     id: "2",
//     name: "Second",
//     types: ["water"],
//   },
//   {
//     id: "3",
//     name: "Third",
//     types: ["grass"],
//   },
//   {
//     id: "4",
//     name: "Fourth",
//     types: ["fire", "grass"],
//   },
//   {
//     id: "5",
//     name: "Fifth",
//     types: ["water", "grass"],
//   },
//   {
//     id: "6",
//     name: "Sixth",
//     types: ["grass", "fire"],
//   },
//   {
//     id: "7",
//     name: "Seventh",
//     types: ["grass", "fire"],
//   },
//   {
//     id: "8",
//     name: "Eighth",
//     types: ["grass", "fire"],
//   },
//   {
//     id: "9",
//     name: "Ninth",
//     types: ["grass", "fire"],
//   },
// ];

const numColumns = 2;

const PokeList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        const pokemonDetails = await Promise.all(
          data.results.map(async (result) => {
            const pokemonResponse = await fetch(result.url);
            const pokemonData = await pokemonResponse.json();
            const speciesURL = `https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}/`;
            const speciesResponse = await fetch(speciesURL);
            const speciesData = await speciesResponse.json();
            const pokemonSpecies = [];
            pokemonSpecies.push(speciesData);
            const evolvesList = pokemonSpecies.map(
              (s) => s.evolves_from_species?.name
            );
            const evolvesFrom = evolvesList.map(
              (evolves) => `${evolves === undefined ? "Initial form" : evolves}`
            );
            const pokemon = {
              id: pokemonData.id,
              name:
                pokemonData.name.charAt(0).toUpperCase() +
                pokemonData.name.slice(1),
              imgURL:
                pokemonData.sprites.other["official-artwork"].front_default,
              types: pokemonData.types.map((type) => type.type.name),
              evolvesFrom:
                evolvesFrom[0].charAt(0).toUpperCase() +
                evolvesFrom[0].slice(1),
            };
            return pokemon;
          })
        );
        setPokemonList(pokemonDetails);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemonList}
        renderItem={({ item }) => <PokeItem data={item} />}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        horizontal={false}
      />
    </SafeAreaView>
  );
};

export default PokeList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(249, 250, 251)",
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: "100%",
  },
});
