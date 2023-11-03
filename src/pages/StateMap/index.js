/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useRoute} from '@react-navigation/native';

function StateMap() {
  const route = useRoute();
  const {state} = route.params;

  const coordinates = {
    Alabama: {
      latitude: 32.806671,
      longitude: -86.79113,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    Alaska: {
      latitude: 61.370716,
      longitude: -152.404419,
      latitudeDelta: 15.0,
      longitudeDelta: 15.0,
    },
    Arizona: {
      latitude: 34.168219,
      longitude: -111.930907,
      latitudeDelta: 4.0,
      longitudeDelta: 4.0,
    },
    Arkansas: {
      latitude: 34.751928,
      longitude: -92.131378,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    California: {
      latitude: 36.116203,
      longitude: -119.681564,
      latitudeDelta: 6.0,
      longitudeDelta: 6.0,
    },
    Colorado: {
      latitude: 38.84511,
      longitude: -106.133512,
      latitudeDelta: 4.0,
      longitudeDelta: 4.0,
    },
    Connecticut: {
      latitude: 41.621814,
      longitude: -72.727807,
      latitudeDelta: 1.5,
      longitudeDelta: 1.5,
    },
    Delaware: {
      latitude: 38.940388,
      longitude: -75.460194,
      latitudeDelta: 1.0,
      longitudeDelta: 1.0,
    },
    'District of Columbia': {
      latitude: 38.89511,
      longitude: -77.03637,
      latitudeDelta: 1.0,
      longitudeDelta: 1.0,
    },
    Florida: {
      latitude: 27.766279,
      longitude: -81.686783,
      latitudeDelta: 5.0,
      longitudeDelta: 5.0,
    },
    Georgia: {
      latitude: 33.040619,
      longitude: -83.643074,
      latitudeDelta: 4.0,
      longitudeDelta: 4.0,
    },
    Hawaii: {
      latitude: 20.796717,
      longitude: -156.331924,
      latitudeDelta: 1.0,
      longitudeDelta: 1.0,
    },
    Idaho: {
      latitude: 44.240459,
      longitude: -114.478828,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    Illinois: {
      latitude: 40.349457,
      longitude: -88.986137,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    Indiana: {
      latitude: 39.849426,
      longitude: -86.258278,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    Iowa: {
      latitude: 42.011539,
      longitude: -93.210526,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    Kansas: {
      latitude: 38.5266,
      longitude: -96.726486,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    Kentucky: {
      latitude: 37.66814,
      longitude: -84.670067,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    Louisiana: {
      latitude: 31.169546,
      longitude: -91.867805,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    Maine: {
      latitude: 44.693947,
      longitude: -69.381927,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    Maryland: {
      latitude: 39.063946,
      longitude: -76.802101,
      latitudeDelta: 2.0,
      longitudeDelta: 2.0,
    },
    Massachusetts: {
      latitude: 42.230171,
      longitude: -71.530106,
      latitudeDelta: 2.0,
      longitudeDelta: 2.0,
    },
    Michigan: {
      latitude: 43.326618,
      longitude: -84.536095,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    Minnesota: {
      latitude: 45.694454,
      longitude: -93.900192,
      latitudeDelta: 4.0,
      longitudeDelta: 4.0,
    },
    Mississippi: {
      latitude: 32.741646,
      longitude: -89.678696,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    Missouri: {
      latitude: 38.456085,
      longitude: -92.288368,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    Montana: {
      latitude: 46.921925,
      longitude: -110.454353,
      latitudeDelta: 4.0,
      longitudeDelta: 4.0,
    },
    Nebraska: {
      latitude: 41.12537,
      longitude: -98.268082,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    Nevada: {
      latitude: 38.313515,
      longitude: -117.055374,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    'New Hampshire': {
      latitude: 43.452492,
      longitude: -71.563896,
      latitudeDelta: 2.0,
      longitudeDelta: 2.0,
    },
    'New Jersey': {
      latitude: 40.298904,
      longitude: -74.521011,
      latitudeDelta: 2.0,
      longitudeDelta: 2.0,
    },
    'New Mexico': {
      latitude: 34.840515,
      longitude: -106.248482,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    'New York': {
      latitude: 42.165726,
      longitude: -74.948051,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    'North Carolina': {
      latitude: 35.630066,
      longitude: -79.806419,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    'North Dakota': {
      latitude: 47.528912,
      longitude: -99.784012,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    Ohio: {
      latitude: 40.388783,
      longitude: -82.764915,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    Oklahoma: {
      latitude: 35.565342,
      longitude: -96.928917,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    Oregon: {
      latitude: 44.572021,
      longitude: -122.070938,
      latitudeDelta: 4.0,
      longitudeDelta: 4.0,
    },
    Pennsylvania: {
      latitude: 40.590752,
      longitude: -77.209755,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    'Rhode Island': {
      latitude: 41.680893,
      longitude: -71.51178,
      latitudeDelta: 1.5,
      longitudeDelta: 1.5,
    },
    'South Carolina': {
      latitude: 33.856892,
      longitude: -80.945007,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    'South Dakota': {
      latitude: 44.299782,
      longitude: -99.438828,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    Tennessee: {
      latitude: 35.747845,
      longitude: -86.692345,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    Texas: {
      latitude: 31.054487,
      longitude: -97.563461,
      latitudeDelta: 6.0,
      longitudeDelta: 6.0,
    },
    Utah: {
      latitude: 40.150032,
      longitude: -111.862434,
      latitudeDelta: 4.0,
      longitudeDelta: 4.0,
    },
    Vermont: {
      latitude: 44.045876,
      longitude: -72.710686,
      latitudeDelta: 2.0,
      longitudeDelta: 2.0,
    },
    Virginia: {
      latitude: 37.769337,
      longitude: -78.169968,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    Washington: {
      latitude: 47.400902,
      longitude: -121.490494,
      latitudeDelta: 4.0,
      longitudeDelta: 4.0,
    },
    'West Virginia': {
      latitude: 38.491226,
      longitude: -80.954442,
      latitudeDelta: 2.5,
      longitudeDelta: 2.5,
    },
    Wisconsin: {
      latitude: 44.268543,
      longitude: -89.616508,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    Wyoming: {
      latitude: 42.755966,
      longitude: -107.30249,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    },
    'Puerto Rico': {
      latitude: 18.2208,
      longitude: -66.5901,
      latitudeDelta: 1.0,
      longitudeDelta: 1.0,
    },
  };

  const region = coordinates[state];

  return (
    <View style={styles.container}>
      <MapView provider={PROVIDER_GOOGLE} style={styles.map} region={region}>
        <Marker coordinate={region} title={state} />
      </MapView>
    </View>
  );
}

export default StateMap;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
