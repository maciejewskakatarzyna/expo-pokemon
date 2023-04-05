import React from 'react';
import { StyleSheet } from 'react-native';
import PokeList from './PokeList';

import { View } from './Themed';

const Home = () => {
    return (
        <View style={styles.container}>
          <PokeList />
        </View>
    );
}

export default Home


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgb(249, 250, 251)',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });