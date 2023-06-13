import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../../components/layout/Header'
import { COLORS, SIZES } from '../../../constants'

const NotificationApp = ({ bellModal, setBellModal }) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: COLORS.light,
          elevation: 12,
          padding: 10,
        }}
      >
        <TouchableOpacity onPress={() => setBellModal(false)}>
          <Image
            source={require('../../../assets/icons/close.png')}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: SIZES.h2,
            marginTop: 5,
            marginHorizontal: 100,
            color: COLORS.dark,
          }}
        >
          Notification
        </Text>
      </View>
      <View style={{ justifyContent: 'center', alignSelf: 'center', flex: 1 }}>
        <Image
          source={require('../../../assets/icons/chat.png')}
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
          }}
        />
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: SIZES.h2,
            }}
          >
            no new notification
          </Text>
          <Text>check back to see new @ mention,</Text>
          <Text>reaction, quote and much more</Text>
        </View>
      </View>
    </>
  )
}

export default NotificationApp

const styles = StyleSheet.create({})
