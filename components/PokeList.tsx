import React from 'react';
import { StyleSheet, FlatList, SafeAreaView, StatusBar } from 'react-native';
import PokeItem from './PokeItem';

type ItemData = {
    id: string;
    name: string;
    imgURL?: string;
    types: string[];
  };

  
  const DATA: ItemData[] = [
    {
        id: '1',
        name: 'First',
        imgURL: 'https://static.wikia.nocookie.net/pokemony/images/5/56/Charmander.png/revision/latest/scale-to-width-down/1000?cb=20150825190042&path-prefix=pl',
        types: ['fire'],
    },
    {
        id: '2',
        name: 'Second',
        types: ['water'],
    },
    {
        id: '3',
        name: 'Third',
        types: ['grass'],
    },
    {
        id: '4',
        name: 'Fourth',
        types: ['fire', 'grass'],
      },
      {
        id: '5',
        name: 'Fifth',
        types: ['water', 'grass'],
      },
      {
        id: '6',
        name: 'Sixth',
        types: ['grass', 'fire'],
      },
      {
        id: '7',
        name: 'Seventh',
        types: ['grass', 'fire'],
      },
      {
        id: '8',
        name: 'Eighth',
        types: ['grass', 'fire'],
      },
      {
        id: '9',
        name: 'Ninth',
        types: ['grass', 'fire'],
      },
  ];

  const numColumns = 2


const PokeList = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
            data={DATA}
            renderItem={({item}) => <PokeItem name={item.name} imgURL={item.imgURL} types={item.types}/>}
            keyExtractor={item => item.id}
            numColumns={numColumns}
            horizontal={false}
            />
        </SafeAreaView>
    );
}

export default PokeList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0, 
        width: '100%',
      },
});

