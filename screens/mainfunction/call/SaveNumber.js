import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Alert,
} from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { SIZES, COLORS } from '../../../constants'
import CountryDropDown from '../../../components/CountryDropDown'

const SaveNumber = ({ navigation }) => {
  const [number, setNumber] = useState(0)
  const [numberPlate, setNumberPlate] = useState(false)
  const displayNumber = useRef()

  useEffect(() => {
    displayNumber.current
    setNumberPlate(true)
  })
  return (
    <View style={{ backgroundColor: 'skyblue', flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/icons/arrow-left.png')}
            style={{
              width: 35,
              height: 35,
            }}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: SIZES.h2,
            // marginHorizontal: 100,
            color: COLORS.dark,
          }}
        >
          India
        </Text>
        {/* <CountryDropDown /> */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/icons/settings.png')}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>

      <TextInput
        ref={displayNumber}
        style={{ marginHorizontal: 20, fontSize: 30 }}
        value={number}
        onChangeText={(n) => {
          setNumber(n)
        }}
        placeholder={'Phone Number'}
      />
      {numberPlate ? (
        <View
          style={{
            backgroundColor: COLORS.light,
            paddingVertical: 20,
            borderRadius: SIZES.radius,
            margin: 10,
            marginTop: SIZES.height / 3.5,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: 10,
            }}
          >
            <View>
              <Text>1</Text>
              <Text></Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text>2</Text>
              <Text>abc</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text>3</Text>
              <Text>def</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: 10,
            }}
          >
            <View>
              <Text>4</Text>
              <Text>ght</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text>5</Text>
              <Text>ijk</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text>6</Text>
              <Text>lmn</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: 10,
            }}
          >
            <View>
              <Text>7</Text>
              <Text>opq</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text>8</Text>
              <Text>rst</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text>9</Text>
              <Text>uvw</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: 10,
            }}
          >
            <View>
              <Text>,</Text>
              <Text></Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text>0</Text>
              <Text>+</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text>#</Text>
              <Text></Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: 10,
            }}
          >
            <View>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('../../../assets/icons/new-message.png')}
                  style={{
                    width: 35,
                    height: 35,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity onPress={() => Alert.alert('call dial')}>
                <Image
                  source={require('../../../assets/icons/phone.png')}
                  style={{
                    width: 35,
                    height: 35,
                    backgroundColor: 'blue',
                    padding: 20,
                    borderRadius: 50,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('../../../assets/icons/close.png')}
                  style={{
                    width: 35,
                    height: 35,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  )
}

export default SaveNumber

const styles = StyleSheet.create({})
