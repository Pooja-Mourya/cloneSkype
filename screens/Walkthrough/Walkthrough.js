import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import { COLORS, constants, FONTS, SIZES } from '../../constants'
import Walkthrough1 from './Walkthrough1'
import TextButton from '../../components/TextButton'
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const Walkthrough = ({ navigation }) => {
  //   console.log('data', constants.walkthrough)
  //   useState for Walkthrough2

  //   const [walk2Animated, setWalk2Animated] = useState(false);

  //   const viewAnimatedChange = React.useRef(({viewableItems, changed}) => {
  //     if (viewableItems[0].index == 1) {
  //       setWalk2Animated(true);
  //     }
  //   });
  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width)
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {constants.walkthrough.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: ['teal', 'cyan', 'teal'],
            extrapolate: 'clamp',
          })
          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: 10,
                height: 10,
                backgroundColor: dotColor,
              }}
            />
          )
        })}
      </View>
    )
  }
  function renderFooter() {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: height * 0.2,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
      >
        <Dots />
        <View
          style={{
            justifyContent: 'space-between',

            flexDirection: 'row',
          }}
        >
          {/* <TouchableOpacity
            style={{
              backgroundColor: 'white',
              width: width / 2.5,
              //   marginHorizontal: 101,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text
              style={{
                color: 'teal',
                fontSize: 16,
                fontWeight: '700',
                textAlign: 'center',
              }}
            >
              Join now
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'teal',
              width: width / 2.5,
              //   marginHorizontal: 101,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: '700',
                textAlign: 'center',
              }}
            >
              Log in
            </Text>
          </TouchableOpacity> */}
          <TextButton
            label="Join Now"
            contentContainerStyle={{
              flex: 1,
              marginLeft: SIZES.radius,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.light,
            }}
            labelStyle={{ ...FONTS.h3, color: COLORS.primary }}
            onPress={() => {
              //   navigation.reset({
              //     index: 0,
              //     routes: [{ name: 'AuthMain' }],
              //   })
              navigation.navigate('Register')
            }}
          />
          <TextButton
            label="Log In"
            contentContainerStyle={{
              flex: 1,
              marginLeft: SIZES.radius,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary,
              padding: SIZES.padding,
            }}
            labelStyle={{ ...FONTS.h3, color: 'white' }}
            onPress={() => {
              navigation.navigate('AuthMain')
            }}
          />
        </View>
      </View>
    )
  }
  const scrollX = React.useRef(new Animated.Value(0)).current
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.light }}>
      <Animated.FlatList
        style={{ flex: 1 }}
        data={constants.walkthrough}
        keyExtractor={(item) => item.id}
        horizontal
        snapToInterval={SIZES.width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        // onViewableItemsChanged={viewAnimatedChange.current}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        renderItem={({ item, index }) => {
          //   console.log('index', index);
          return (
            <View
              style={{
                width: SIZES.width,
                justifyContent: 'center',
              }}
            >
              {/* image section  */}
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  width: SIZES.width,
                  height: 300,
                  alignItems: 'center',
                  zIndex: 2,
                }}
              >
                {index == 0 && (
                  <Image
                    source={require('../../assets/icons/chat.png')}
                    style={{ width: 200, height: 200 }}
                  />
                )}
                {index == 1 && (
                  <Image
                    source={require('../../assets/icons/qr-code.png')}
                    style={{ width: 200, height: 200 }}
                  />
                )}
                {index == 2 && (
                  <Image
                    source={require('../../assets/icons/live-streaming.png')}
                    style={{ width: 200, height: 200 }}
                  />
                )}
                {index == 3 && (
                  <Image
                    source={require('../../assets/icons/fire.png')}
                    style={{ width: 200, height: 200 }}
                  />
                )}
              </View>

              {/* title & description  */}
              <View
                style={{
                  justifyContent: 'flex-start',
                  alignContent: 'center',
                  height: SIZES.height * 0.35,
                  paddingHorizontal: SIZES.padding,
                }}
              >
                <Text style={{ textAlign: 'center', ...FONTS.h1 }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: COLORS.grey,
                    ...FONTS.body3,
                    textAlign: 'center',
                    marginTop: SIZES.radius,
                  }}
                >
                  {item.sub_title}
                </Text>
              </View>
            </View>
          )
        }}
      />
      {renderFooter()}
    </View>
  )
}

export default Walkthrough

const styles = StyleSheet.create({})
