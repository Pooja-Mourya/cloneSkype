import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../../constants'

const SearchContact = ({ navigation }) => {
  const [search, setSearch] = useState('')
  return (
    <>
      <View style={{ backgroundColor: 'skyblue', paddingVertical: 10 }}>
        <View
          style={{
            flexDirection: 'row-reverse',
            marginHorizontal: 20,
            width: '90%',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: COLORS.light,
              borderRadius: SIZES.radius,
            }}
          >
            <Image
              source={require('../../../assets/icons/search.png')}
              style={{
                width: 30,
                height: 30,
                borderRadius: 50,
                left: 15,
                marginVertical: 10,
              }}
            />
            <TextInput
              placeholder="search"
              value={search}
              onChangeText={(t) => setSearch(t)}
              style={{
                borderRadius: SIZES.radius,
                // backgroundColor: 'red',
                width: '70%',
                paddingHorizontal: 10,
                marginHorizontal: 10,
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.light,
              paddingHorizontal: 10,
            }}
          >
            <Image
              source={require('../../../assets/icons/arrow-left.png')}
              style={{ width: 30, height: 30, marginTop: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={{ marginHorizontal: 15, marginTop: 5 }}>
        search for people by their email address and full name
      </Text>
      <Text
        style={{
          marginHorizontal: 15,
          fontSize: SIZES.h2,
          color: COLORS.dark,
          paddingVertical: 30,
        }}
      >
        Other ways to add people
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          backgroundColor: COLORS.light,
          elevation: 1,
          padding: 5,
          borderRadius: SIZES.radius,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/icons/video-camera.png')}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </TouchableOpacity>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{ fontSize: SIZES.h3, color: COLORS.dark }}
            onPress={() => navigation.navigate('ShareContact')}
          >
            Invite to meeting
          </Text>
          <Text>Invite friends to meeting</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          elevation: 1,
          backgroundColor: COLORS.light,
          padding: 5,
          borderRadius: SIZES.radius,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/icons/telephone.png')}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </TouchableOpacity>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{ fontSize: SIZES.h3, color: COLORS.dark }}
            onPress={() => navigation.navigate('AddContact')}
          >
            Add a phone number
          </Text>
          <Text>save a number to your contact</Text>
        </View>
      </View>
    </>
  )
}

export default SearchContact

const styles = StyleSheet.create({})
