import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { View } from './Themed';

type PokeProps = {
    name: string;
    imgURL?: string;
    types: string[];
    };

const PokeItem = ({name, imgURL, types}: PokeProps) => {
    
    return (
        <View style={styles.pokeItem}>
            <Text style={styles.name}>{name}</Text>
            {imgURL ? (
            <Image style={styles.image} source={{uri: imgURL}} /> )
            : (
            <View style={styles.noImage} />
            )    
        }
            <Text style={styles.types}><Text>Types: {types.map(type => `${type}, `)} </Text></Text>
        </View>
    )
}

export default PokeItem

const styles = StyleSheet.create({
    pokeItem: {
        backgroundColor: 'rgb(229, 231, 235)',
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
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
    },
    noImage: {
        width: 100,
        height: 100,
        backgroundColor: '#d7dae0',
    },
    types: {
        fontSize: 12,
        marginTop: 10,
    }
});