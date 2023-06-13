import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../../constants'
import DocumentPicker from 'react-native-document-picker'

const shareOptions = [
  {
    id: '1',
    title: 'Copied to clipboard',
    icon: require('../../../assets/icons/paste.png'),
    messageText: 'http://localhost',
  },
  {
    id: '2',
    title: 'OR Code',
    icon: require('../../../assets/icons/qr-code.png'),
    messageText: 'scan or display my code',
  },
  {
    id: '3',
    title: 'More',
    icon: require('../../../assets/icons/share.png'),
    messageText: 'send as sms, email or through another app',
  },
  {
    id: '4',
    title: 'revoke the share link',
    icon: require('../../../assets/icons/close.png'),

    messageText: '',
  },
]

const ShareContact = ({ navigation }) => {
  const [profileScreen, setProfileScreen] = useState(true)
  const [avatar, setAvatar] = useState('')

  const selectImage = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: DocumentPicker.types.images,
      })
      setAvatar(...res)
      console.log('myOBJ', ...res)
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled from single doc picker')
      } else {
        alert('Unknown Error: ' + JSON.stringify(err))
        throw err
      }
    }
  }
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
          <Image
            source={require('../../../assets/icons/arrow-left.png')}
            style={{ width: 30, height: 30, marginTop: 10 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: SIZES.h2,
            color: COLORS.dark,
            marginTop: 8,
            marginHorizontal: 30,
          }}
        >
          Share and Contact
        </Text>
      </View>
      <ScrollView>
        <View
          style={{
            backgroundColor: COLORS.light,
            borderRadius: SIZES.radius,
            marginHorizontal: 20,
            elevation: 2,
            // marginVertical: 20,
          }}
        >
          {profileScreen ? (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text
                  style={{
                    padding: 10,
                    fontSize: SIZES.h3,
                    color: COLORS.dark,
                    textAlign: 'center',
                  }}
                >
                  Add a profile photo
                </Text>
                <Text
                  style={{
                    padding: 10,
                  }}
                  onPress={() => setProfileScreen(false)}
                >
                  ❎
                </Text>
              </View>

              <Text style={{ textAlign: 'center' }}>
                Help your friends recognize you when you share
              </Text>
              <TouchableOpacity
                onPress={() => selectImage()}
                style={{
                  backgroundColor: COLORS.support1,
                  margin: 20,
                  marginHorizontal: 60,
                  borderRadius: 40,
                }}
              >
                <Text
                  style={{
                    padding: 10,
                    fontSize: SIZES.h2,
                    color: COLORS.light,
                    textAlign: 'center',
                  }}
                >
                  Upload profile photo
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>

        <View
          style={{
            alignItems: 'center',
            padding: 10,
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: SIZES.h3, margin: 10 }}>
            Connect with any one by sharing a link to your profile{' '}
          </Text>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: COLORS.support3,
              marginHorizontal: 100,
              borderRadius: SIZES.radius,
              marginVertical: 10,
              width: 200,
              height: 180,
            }}
          >
            {avatar ? (
              <Image
                source={{ uri: avatar.uri }}
                style={{ width: 100, height: 100, margin: 10 }}
              />
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
              >
                <Text
                  style={{
                    width: 100,
                    height: 100,
                    margin: 10,
                    fontSize: SIZES.h1,
                    textAlign: 'center',
                  }}
                >
                  PM
                </Text>
              </View>
            )}

            <Text
              style={{
                backgroundColor: COLORS.support2,
                padding: 10,
                width: '100%',
                textAlign: 'center',
                fontSize: SIZES.h2,
                marginTop: 8,
              }}
            >
              POOJA MOURYA
            </Text>
          </View>
        </View>
        <FlatList
          style={{ marginBottom: 30 }}
          data={shareOptions}
          keyExtractor={(key) => key.id}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  padding: 16,
                  backgroundColor: COLORS.light,
                  elevation: 1,
                  marginVertical: 1,
                }}
              >
                <Image
                  source={item.icon}
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: SIZES.radius,
                  }}
                />
                <View>
                  <Text style={{ marginHorizontal: 10, color: COLORS.dark }}>
                    {item.title}
                  </Text>
                  <Text style={{ marginHorizontal: 10 }}>
                    {item.messageText}
                  </Text>
                </View>
              </View>
            )
          }}
        />
      </ScrollView>
    </>
  )
}

export default ShareContact

const styles = StyleSheet.create({})
