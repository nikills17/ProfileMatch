import { View, Text, Image } from 'react-native';
import React from 'react';

interface box {
  title: string;
  image: any;
}

export default function IconBox({ title, image }: box) {
  return (
    <View
      style={{
        elevation: 1,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 13,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        gap: 8,
      }}>
      <Image source={image} style={{ width: 16, height: 16 }} resizeMode="cover" />
      <Text style={{ fontSize: 14, fontWeight: '600', color: '#000' }}>{title}</Text>
    </View>
  );
}
