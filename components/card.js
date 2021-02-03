import React from 'react'
import { View, Text, Image, ImageSourcePropType, StyleSheet, Dimensions } from 'react-native'
import { shape, string, number } from 'prop-types'

const { height } = Dimensions.get('window')

const Card = ({ card }) => (
  <View
    activeOpacity={1}
    style={styles.card}
  >
    <Image
        resizeMode="cover"
        style={styles.image}
        source={card.photo}
    />
    <View style={styles.photoDescriptionContainer}>
      <Text style={styles.text}>
      {`${card.name}, ${card.age}`}
      </Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
    card: {
        height: '50%',
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        //marginTop: '5%'
      },
      image: {
        borderRadius: 5,
        flex: 1,
        width: '95vw',
      },
      photoDescriptionContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        flexDirection: 'column',
        height: '100%',
        position: 'absolute',
        left: 10,
        bottom: 10,
      },
      text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontFamily: 'Avenir',
        textShadowColor: 'black',
        textShadowRadius: 10,
      },
})

export default Card;