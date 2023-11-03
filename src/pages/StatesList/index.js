/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { colors, fonts } from '../../utils';
import { Gap } from '../../component';

const API_URL =
  'https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest';

const stateImages = {
  Alabama: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Alabama.svg/1280px-Flag_of_Alabama.svg.png',
  Alaska : 'https://cdn.britannica.com/36/5436-050-B0DCE113/Flag-Alaska.jpg',
  Arizona : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWLG5exPMyl3Uh0EFsf9Vdr8qkByYvgbMZNuPERHUrlQ&s',
  Arkansas : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arkansas.svg/1200px-Flag_of_Arkansas.svg.png',
  California: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/1024px-Flag_of_California.svg.png',
  Colorado: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Flag_of_Colorado.svg/1024px-Flag_of_Colorado.svg.png',
  Connecticut: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Connecticut.svg/800px-Flag_of_Connecticut.svg.png',
  Delaware: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Delaware.svg/1024px-Flag_of_Delaware.svg.png',
  'District of Columbia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_the_District_of_Columbia.svg/1280px-Flag_of_the_District_of_Columbia.svg.png',
  Florida: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Florida.svg/1024px-Flag_of_Florida.svg.png',
  Georgia: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Georgia_%28U.S._state%29.svg/1024px-Flag_of_Georgia_%28U.S._state%29.svg.png',
  Hawaii: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Hawaii.svg/1280px-Flag_of_Hawaii.svg.png',
  Idaho: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Idaho.svg/800px-Flag_of_Idaho.svg.png',
  Illinois: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Illinois.svg/1024px-Flag_of_Illinois.svg.png',
  Indiana: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Flag_of_Indiana.svg/1024px-Flag_of_Indiana.svg.png',
  Iowa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Iowa.svg/1024px-Flag_of_Iowa.svg.png',
  Kansas: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Kansas.svg/1024px-Flag_of_Kansas.svg.png',
  Kentucky: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Kentucky.svg/1280px-Flag_of_Kentucky.svg.png',
  Louisiana: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Louisiana.svg/1024px-Flag_of_Louisiana.svg.png',
  Maine: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Maine.svg/800px-Flag_of_Maine.svg.png',
  Maryland: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Maryland.svg/1024px-Flag_of_Maryland.svg.png',
  Massachusetts: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Massachusetts.svg/1024px-Flag_of_Massachusetts.svg.png',
  Michigan: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Michigan.svg/1024px-Flag_of_Michigan.svg.png',
  Minnesota: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Minnesota.svg/1024px-Flag_of_Minnesota.svg.png',
  Mississippi: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_Mississippi.svg/1024px-Flag_of_Mississippi.svg.png',
  Missouri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Missouri.svg/1024px-Flag_of_Missouri.svg.png',
  Montana: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_Montana.svg/1024px-Flag_of_Montana.svg.png',
  Nebraska: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Flag_of_Nebraska.svg/1024px-Flag_of_Nebraska.svg.png',
  Nevada: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Flag_of_Nevada.svg/1024px-Flag_of_Nevada.svg.png',
  'New Hampshire': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_New_Hampshire.svg/1024px-Flag_of_New_Hampshire.svg.png',
  'New Jersey': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_New_Jersey.svg/1024px-Flag_of_New_Jersey.svg.png',
  'New Mexico': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_New_Mexico.svg/1024px-Flag_of_New_Mexico.svg.png',
  'New York': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_New_York.svg/1280px-Flag_of_New_York.svg.png',
  'North Carolina': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Flag_of_North_Carolina.svg/1024px-Flag_of_North_Carolina.svg.png',
  'North Dakota': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Flag_of_North_Dakota.svg/800px-Flag_of_North_Dakota.svg.png',
  Ohio: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Ohio.svg/1024px-Flag_of_Ohio.svg.png',
  Oklahoma:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Flag_of_Oklahoma.svg/1024px-Flag_of_Oklahoma.svg.png',
  Oregon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Flag_of_Oregon_%28reverse%29.svg/1024px-Flag_of_Oregon_%28reverse%29.svg.png',
  Pennsylvania: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Pennsylvania.svg/800px-Flag_of_Pennsylvania.svg.png',
  'Rhode Island': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Rhode_Island.svg/800px-Flag_of_Rhode_Island.svg.png',
  'South Carolina': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Flag_of_South_Carolina.svg/1024px-Flag_of_South_Carolina.svg.png',
  'South Dakota': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_South_Dakota.svg/1024px-Flag_of_South_Dakota.svg.png',
  Tennessee: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Tennessee.svg/1024px-Flag_of_Tennessee.svg.png',
  Texas: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Texas.svg/1024px-Flag_of_Texas.svg.png',
  Utah: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Utah.svg/1024px-Flag_of_Utah.svg.png',
  Vermont: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Vermont.svg/1024px-Flag_of_Vermont.svg.png',
  Virginia: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Virginia.svg/1024px-Flag_of_Virginia.svg.png',
  Washington: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Washington.svg/1024px-Flag_of_Washington.svg.png',
  'West Virginia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_West_Virginia.svg/1280px-Flag_of_West_Virginia.svg.png',
  Wisconsin:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_Wisconsin.svg/1024px-Flag_of_Wisconsin.svg.png',
  Wyoming: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Wyoming.svg/1024px-Flag_of_Wyoming.svg.png',
  'Puerto Rico': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_Puerto_Rico.svg/1024px-Flag_of_Puerto_Rico.svg.png',
};

function StatesList() {
  const [statesData, setStatesData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setStatesData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  return (
    <View style={styles.page}>
      <Gap height={20}/>
      <FlatList
        data={statesData}
        keyExtractor={(item) => item.State}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('StateMap', { state: item.State })}
            style={styles.cardContainer}
          >
            <View style={styles.cardTextContainer}>
            {stateImages[item.State] && (
              <Image source={{uri: stateImages[item.State]}} style={styles.cardImage} />
            )}
            <Gap height={15}/>
              <Text style={styles.cardTitle}>{item.State}</Text>
              <Text style={styles.cardText}>Population: {item.Population}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default StatesList;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    elevation: 5,
  },
  cardImage: {
    width: 100,
    height: 60,
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  cardText: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  cardTextContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
});
