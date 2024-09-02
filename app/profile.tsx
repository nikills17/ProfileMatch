import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import React from 'react';
import IconBox from '~/components/iconBox';
import { appAssets } from '~/utils/appAssets';
import Button from '~/components/Button';
import ImageSlider from '~/components/slider';

export default function Profile() {
  const content = [
    { img: appAssets.women, title: 'Women' },
    { img: appAssets.hindu, title: 'Hindu' },
    { img: appAssets.taurus, title: 'Taurus' },
    { img: appAssets.beer, title: 'Never' },
    { img: appAssets.cig, title: 'Sometimes' },
  ];
  const contentSec = [
    { img: appAssets.music, title: 'Music' },
    { img: appAssets.books, title: 'Books' },
    { img: appAssets.gym, title: 'Gym' },
  ];

  const images = [
    { id: 1, source: appAssets.alisha },
    { id: 2, source: appAssets.alisha },
    { id: 3, source: appAssets.alisha },
    { id: 4, source: appAssets.alisha },
  ];

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
      }}>
      <ImageSlider data={images} />

      {/* -----------Bio---------- */}
      <View
        style={{
          borderWidth: 0.5,
          borderColor: '#ccc',
          paddingVertical: 12,
          paddingHorizontal: 14,
          borderRadius: 22,
        }}>
        <Text style={{ fontWeight: '500', fontSize: 20, color: '#000' }}>Bio</Text>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 14,
            paddingTop: 5,
            lineHeight: 20,
            letterSpacing: 1,
          }}>
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form. Lorem ipsum is a placeholder text used to demonstrate the
          visual form
        </Text>

        <Text style={{ fontWeight: '500', fontSize: 20, color: '#000', paddingTop: 12 }}>
          About Me
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 15, marginTop: 10 }}>
          {content.map((item: any, index: number) => (
            <View key={index}>
              <IconBox image={item.img} title={item.title} />
            </View>
          ))}
        </View>
      </View>

      {/* -----------Common Intertes---------- */}
      <View
        style={{
          borderWidth: 0.5,
          borderColor: '#ccc',
          paddingVertical: 12,
          paddingHorizontal: 14,
          borderRadius: 22,
          marginTop: 15,
          width: '100%',
        }}>
        <Text style={{ fontWeight: '500', fontSize: 20, color: '#000' }}>Common Interests</Text>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 15, marginTop: 10 }}>
          {contentSec.map((item: any, index: number) => (
            <View key={index}>
              <IconBox image={item.img} title={item.title} />
            </View>
          ))}
        </View>
      </View>

      <Button title="Send Message" />
    </View>
  );
}
