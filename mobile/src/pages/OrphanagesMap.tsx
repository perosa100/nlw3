import React, { useState } from 'react'
import { StyleSheet, Dimensions, View, Text } from 'react-native'
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'
import { Feather } from '@expo/vector-icons'
import mapMarkerImg from '../images/map-marker.png'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import api from './../services/api'

interface Orphanage {
  id: number
  name: string
  latitude: number
  longitude: number
}

const OrphanagesMap = () => {
  const navigation = useNavigation()
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  function handleNavigateToOrphanageDetails(id: number) {
    navigation.navigate('OrphanageDetails', { id })
  }

  function handleNavigateToCreateOrphanage() {
    navigation.navigate('SelectMapPosition')
  }

  useFocusEffect(() => {
    api.get('orphanages').then((response) => {
      setOrphanages(response.data)
    })
  })

  return (
    <View style={styles.container}>
      {/*  <StatusBar style="auto" /> */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -22.502494,
          longitude: -55.697806,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008
        }}
      >
        {orphanages.map((orphanage) => (
          <Marker
            key={orphanage.id}
            icon={mapMarkerImg}
            coordinate={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude
            }}
            calloutAnchor={{
              x: 2.7,
              y: 0.8
            }}
          >
            <Callout
              tooltip
              onPress={() => {
                handleNavigateToOrphanageDetails(orphanage.id)
              }}
            >
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutContainerText}>
                  {orphanage.name}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {orphanages.length} orfanatos encotnrados
        </Text>
        <RectButton
          onPress={handleNavigateToCreateOrphanage}
          style={styles.createOrphanageButton}
        >
          <Feather name="plus" size={20} color="#fff" />
        </RectButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 16,
    justifyContent: 'center'
  },
  calloutContainerText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: ' Nunito_700Bold'
  },
  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 24,

    backgroundColor: '#fff',
    borderRadius: 20,
    height: 46,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footerText: {
    fontFamily: ' Nunito_700Bold',
    color: '#8fa7b3'
  },
  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',

    elevation: 3
  }
})

export default OrphanagesMap
