import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {width} = Dimensions.get('window');

const MyCarousel = ({data}) => {
  const snapRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({item, index}) => {
    const isFocused = index === activeIndex;

    return (
      <View
        style={{
          height: 150,
          borderRadius: 10,
          overflow: 'hidden',
        }}>
        <Image
          source={{uri: item.image}}
          style={{width: '100%', height: '100%'}}
        />
      </View>
    );
  };

  return (
    <Carousel
      //   layout={''}
      ref={snapRef}
      data={data || []}
      sliderWidth={width}
      itemWidth={(75 * width) / 100}
      itemHeight={100}
      sliderHeight={100}
      renderItem={renderItem}
      activeSlideAlignment={'center'}
      inactiveSlideOpacity={0.4}
      inactiveSlideScale={0.97}
      inactiveSlideShift={-5}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
  },
  focusedItem: {
    width: (80 * width) / 100, // Larger width for focused item
    height: 200, // Larger height for focused item
    backgroundColor: '#FFD700',
  },
  unfocusedItem: {
    width: (65 * width) / 100, // Smaller width for unfocused items
    height: 150, // Smaller height for unfocused items
    backgroundColor: '#D3D3D3',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyCarousel;
