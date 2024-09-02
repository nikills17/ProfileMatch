import { View, Text, Image } from 'react-native';
import React from 'react';

interface sBox {
  image?: any;
  title: any;
}

export default function SliderIconBox({ image, title }: sBox) {
  return (
    <View
      style={{
        elevation: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.34)',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        gap: 5,
      }}>
      {image && <Image source={image} style={{ width: 20, height: 20 }} resizeMode="cover" />}
      <Text style={{ fontSize: 16, fontWeight: '800', color: '#fff' }}>{title}</Text>
    </View>
  );
}
