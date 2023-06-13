import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../constants'
import FormInput from '../FormInput'

const width = Dimensions.get('window').width

const Header = ({ text }) => {
  const [search, setSearch] = useState('')
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerFlex}>
        <Text style={styles.myFavText}>{text}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.light,
            padding: 10,
            borderRadius: SIZES.radius,
          }}
        >
          <Image
            source={require('../../assets/icons/menu.png')}
            style={{
              width: 25,
              height: 25,
              marginRight: SIZES.base,
              marginTop: 5,
            }}
          />
        </TouchableOpacity>

        <FormInput
          containerStyle={
            styles.searchContainer
            // borderRadius: SIZES.radius,
            // backgroundColor: COLORS.error,
          }
          placeholder="Search"
          //   secureTextEntry={true}
          value={search}
          onChange={(text) => setSearch(text)}
          prependComponent={
            <Image
              source={require('../../assets/icons/search.png')}
              style={{
                width: 25,
                height: 25,
                // marginRight: SIZES.base,
              }}
            />
          }
        />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    width: width,
    height: width / 4 - 35,
    // backgroundColor: 'white',
    // elevation: 12,
    padding: 10,
  },
  headerFlex: {
    flexDirection: 'row-reverse',
  },
  searchContainer: {
    width: '85%',
    borderRadius: 10,
    // paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  searchIconStyle: {
    position: 'absolute',
    marginTop: 10,
    marginRight: width / 1 - 65,
  },
  menuIconStyle: {
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
    padding: 3,
  },
  myFavText: {
    // fontFamily: fonts.medium,
    fontSize: 25,
    color: COLORS.dark,
    fontWeight: '700',
  },
})
