import { View, Text, Pressable } from 'react-native';
import React from 'react';

interface button {
  title: string;
  onPress?: () => void;
}

export default function Button({ title, onPress }: button) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: 280,
        padding: 15,
        backgroundColor: '#736CD3',
        marginHorizontal: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      }}>
      <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>{title}</Text>
    </Pressable>
  );
}
