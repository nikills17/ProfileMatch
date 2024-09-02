import React, { useRef, useState } from 'react';
import { View, FlatList, Image, Dimensions, StyleSheet, Animated, Text } from 'react-native';
import SliderIconBox from './sliderBox';
import { appAssets } from '~/utils/appAssets';

const { width } = Dimensions.get('window');

interface slider {
  data: any;
}

export default function ImageSlider({ data }: slider) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
    useNativeDriver: false,
  });

  const renderItem = ({ item, index }: any) => (
    <View key={index} style={styles.imageContainer}>
      <Image source={item.source} style={styles.image} resizeMode="contain" />
    </View>
  );

  const handleViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        keyExtractor={(item) => item?.id?.toString()} // Ensure unique keys
        renderItem={renderItem}
        snapToAlignment="center"
        snapToInterval={width} // Ensure the snapping matches the screen width
        decelerationRate="fast"
        scrollEventThrottle={16} // Smoother scrolling
      />
      <View style={styles.paginationContainer}>
        {data.map((_: any, index: number) => (
          <View key={index} style={[styles.dot, currentIndex === index && styles.activeDot]} />
        ))}
      </View>
      <View style={styles.textOverlay}>
        <Text style={styles.nameText}>Alisha Singh</Text>
        <View style={styles.iconContainer}>
          <SliderIconBox title={'2 Km away'} image={appAssets.pin} />
          <SliderIconBox title={'Level 3'} image={appAssets.vol} />
          <SliderIconBox title={'Long-Term'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width, // Full width of the screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 400,
    borderRadius: 20,
  },
  paginationContainer: {
    position: 'absolute',
    top: 50,
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 10,
  },
  dot: {
    height: 4,
    width: 70,
    borderRadius: 5,
    backgroundColor: '#ccc',
    margin: 5,
  },
  activeDot: {
    backgroundColor: '#fff',
  },
  textOverlay: {
    position: 'absolute',
    bottom: 50,
    left: 20,
  },
  nameText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '700',
  },
  iconContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
