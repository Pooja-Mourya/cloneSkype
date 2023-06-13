import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../../constants'

const AddContact = ({ navigation }) => {
  const [name, setName] = useState('')
  return (
    <>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          margin: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/icons/arrow-left.png')}
            style={{ width: 35, height: 35 }}
          />
        </TouchableOpacity>

        <Text style={{ fontSize: 25, color: COLORS.dark }}>
          Add phone number
        </Text>
        <TouchableOpacity style={{}}>
          <Text
            style={{
              backgroundColor: COLORS.support1,
              padding: 8,
              borderRadius: SIZES.radius,
              width: 65,
              textAlign: 'center',
              color: COLORS.light,
            }}
          >
            save
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          borderBottomWidth: 1,
          marginBottom: 20,
        }}
      >
        <Text>Name</Text>
        <TextInput
          value={name}
          onChangeText={(n) => setName(n)}
          placeholder="First name and surname"
        />
      </View>
      <View
        style={{
          marginHorizontal: 20,
          borderBottomWidth: 1,
        }}
      >
        <Text>Phone</Text>
        <TextInput
          value={name}
          onChangeText={(n) => setName(n)}
          placeholder="Enter your number"
          //   textContentType="number"
        />
      </View>
    </>
  )
}

export default AddContact

const styles = StyleSheet.create({})
