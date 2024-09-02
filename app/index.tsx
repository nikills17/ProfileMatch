import { View, Text, ImageBackground, StatusBar, Image, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { appAssets } from '~/utils/appAssets';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Button from '~/components/Button';

export default function App() {
  return (
    <ImageBackground source={appAssets.successBg} style={styles.background}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <View style={styles.container}>
        <View>
          <Image source={appAssets.heart} style={styles.heartImage} resizeMode="contain" />
          <Image source={appAssets.girl} style={styles.girlImage} resizeMode="contain" />
          <View style={styles.heartIcon}>
            <AntDesign name="heart" size={16} color="black" />
          </View>
          <Image source={appAssets.boy} style={styles.boyImage} resizeMode="contain" />
        </View>
        <View style={styles.starContainer}>
          <View style={styles.largeStar}>
            <MaterialCommunityIcons name="star-four-points" size={65} color="#3CC4B0" />
          </View>
          <View style={styles.smallStar}>
            <MaterialCommunityIcons name="star-four-points" size={20} color="#3CC4B0" />
          </View>
        </View>
        <View style={styles.rightStar}>
          <Image source={appAssets.star} style={styles.starImage} resizeMode="contain" />
        </View>
        <Text style={styles.congratsText}>Congratulations!</Text>
        <Text style={styles.subtitleText}>You and nancy liked each other</Text>
        <Button title="Go to profile" onPress={() => router.push('/profile')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '60%',
  },
  heartImage: {
    height: 250,
    width: 250,
    marginRight: 60,
  },
  girlImage: {
    height: 250,
    width: 200,
    position: 'absolute',
    bottom: '54%',
    left: -20,
  },
  heartIcon: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: '#736CD3',
    justifyContent: 'center',
    alignItems: 'center',
    top: -105,
    left: 160,
    transform: [{ rotateX: '25deg' }, { rotateZ: '25deg' }],
  },
  boyImage: {
    height: 250,
    width: 200,
    position: 'absolute',
    top: '60%',
    left: '30%',
  },
  starContainer: {
    flexDirection: 'row',
    right: 130,
  },
  largeStar: {
    transform: [{ rotateZ: '-30.62deg' }],
  },
  smallStar: {
    transform: [{ rotateZ: '-30.62deg' }],
    marginLeft: 2,
    marginTop: 20,
  },
  rightStar: {
    alignSelf: 'flex-end',
    marginRight: 60,
    top: -200,
  },
  starImage: {
    height: 50,
    width: 50,
  },
  congratsText: {
    fontWeight: '700',
    fontSize: 30,
    letterSpacing: 3,
    color: '#fff',
    paddingTop: 120,
  },
  subtitleText: {
    fontWeight: '400',
    fontSize: 16,
    color: '#fff',
    paddingTop: 6,
    opacity: 0.5,
  },
  button: {
    width: 280,
    padding: 15,
    backgroundColor: '#736CD3',
    marginHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
