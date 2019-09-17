import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Text } from 'expo-ui-kit';
import MapView from 'react-native-maps';

import parks from '../assets/data/parks';

const { height, width } = Dimensions.get('screen');


class Map extends Component {
  renderHeader() {
    return (
      <View style={styles.header}>
        <Text>ParkFinder</Text>
      </View>
    );
  }

  renderParking(park) {
    return (
      <View style={styles.parking} key={`park-${park.id}`}>
        <Text>{park.name}</Text>
      </View>
    );
  }

  renderParkings() {
    return (
      <ScrollView horizontal pagingEnabled scrollEnabled centerContent showsHorizontalScrollIndicator style={styles.parkings}>
        {parks.map((park) => this.renderParking(park))}
      </ScrollView>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
        />
        {this.renderParkings()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 0.5,
    justifyContent: 'center',
  },
  map: {
    flex: 3
  },
  parkings: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 24,
  },
  parking: {
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 12,
    marginHorizontal: 24,
    width: width - (24 * 2)
  }
});

export default Map;
