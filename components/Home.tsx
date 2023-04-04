import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from './Themed';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TEST</Text>
        </View>
    );
}

export default Home


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });