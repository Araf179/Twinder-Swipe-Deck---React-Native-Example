import { StatusBar } from 'expo-status-bar';
import React, {useRef} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper'
import Card from './components/card';
import IconButton from './components/iconButton';
import OverlayLabel from './components/overlayLabel';
import Data from './data/data'


export default function App() {
  let useSwiper;

  const handleOnSwipedLeft = () => { useSwiper.swipeBack() }
  const handleOnSwipedTop = () => useSwiper.swipeTop()
  const handleOnSwipedRight = () => useSwiper.swipeRight()

  return (
    <View style={styles.container}>
      <Swiper
          ref={swiper => {
            useSwiper = swiper
          }}
          animateCardOpacity
          cards={Data}
          renderCard={card => <Card card={card} />}
          cardIndex={0}
          backgroundColor="white"
          stackSize={2}
          overlayLabels={{
            left: {
              title: 'NOPE',
              element: <OverlayLabel label="NOPE" color="#E5566D" />,
            },
            right: {
              title: 'LIKE',
              element: <OverlayLabel label="LIKE" color="#4CCC93" />,
            },
          }}
        />
      <View style={styles.buttonsContainer}>
        <IconButton
          name="close"
          onPress={handleOnSwipedLeft}
          color="white"
          backgroundColor="#E5566D"
        />
        <IconButton
          name="star"
          onPress={handleOnSwipedTop}
          color="white"
          backgroundColor="#3CA3FF"
        />
        <IconButton
          name="heart"
          onPress={handleOnSwipedRight}
          color="white"
          backgroundColor="#4CCC93"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'relative',
    top: '52%'
  },
});
