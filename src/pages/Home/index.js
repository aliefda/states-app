/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import {colors, fonts} from '../../utils';
import { BGMap } from '../../assets';

function Home({navigation}) {
  return (
    <ImageBackground source={BGMap} style={styles.container}>
      <View style={styles.page}>
        <Text style={styles.title}>Welcome to the USA States App</Text>
        <Text style={styles.subtitle}>
          Discover information about U.S.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('StatesList')}>
        <Text style={styles.buttonText}>View States</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  page: {
    padding: 40,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.primary[800],
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 10,
    color: colors.text.primary,
  },
  subtitle: {
    fontFamily: fonts.primary[800],
    color: colors.text.secondary,
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.primary[600],
    fontSize: 16,
  },
});
