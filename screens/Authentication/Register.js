import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'
import { Shadow } from 'react-native-shadow-2'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { FormInput, TextButton } from '../../components'
import { useState } from 'react'
import { Avatar } from 'react-native-paper'
import DocumentPicker from 'react-native-document-picker'
// import storage, { firebase } from '@react-native-firebase/storage'

const Register = () => {
  const [click, setClick] = useState(false)
  const [userImage, setUserImage] = useState('')
  const [email, setEmail] = useState('')
  const [designation, setDesignation] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleImageUpload = async () => {
    // const reference = storage().ref('black-t-shirt-sm.png')
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      })
      let imgObject = {}
      for (let i = 0; i < res.length; i++) {
        const element = res[i]
        imgObject = element
      }
      setUserImage(imgObject.uri)
      // path to existing file on filesystem
      //   const defaultStorageBucket = storage()
      //   const secondaryStorageBucket = firebase
      //     .app()
      //     .storage('gs://cloneskype-6b899.appspot.com')
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        // User canceled the picker
        console.log('User canceled image selection')
      } else {
        // Error occurred while picking the image
        console.log('Error selecting image:', error)
      }
    }
  }

  const handleSignUp = () => {
    console.log('first')
  }

  //   console.log(
  //     'called :',
  //     email,
  //     designation,
  //     password,
  //     confirmPassword,
  //     userImage,
  //   )

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        style={{
          marginVertical: 20,
          borderWidth: 1,
          borderRadius: 100,
          width: 110,
          height: 110,
          padding: 5,
        }}
        onPress={() => {
          handleImageUpload()
        }}
      >
        <Avatar.Image
          size={100}
          source={{
            uri: !userImage
              ? 'https://w7.pngwing.com/pngs/43/926/png-transparent-computer-icons-avatar-user-avatar-heroes-woman-silhouette.png'
              : userImage,
          }}
        />
        <Text
          style={{
            position: 'absolute',
            alignSelf: 'flex-end',
            marginTop: 70,
            backgroundColor: 'white',
            padding: 5,
            borderRadius: 50,
            borderWidth: 1,
          }}
        >
          📸
        </Text>
      </TouchableOpacity>

      <Shadow>
        <View style={styles.authContainer}>
          <Text
            style={{
              lineHeight: 45,
              color: COLORS.dark,
              ...FONTS.dark,
              fontSize: SIZES.h1,
              paddingHorizontal: 10,
            }}
          >
            Sign up
          </Text>
          <KeyboardAwareScrollView
            enableOnAndroid={true}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps={'handled'}
            extraScrollHeight={-300}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'center',
            }}
          >
            <FormInput
              containerStyle={{
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.error,
              }}
              placeholder="Email"
              value={email}
              onChange={(text) => setEmail(text)}
              prependComponent={
                <Image
                  source={require('../../assets/icons/email.png')}
                  style={{
                    width: 25,
                    height: 25,
                    marginRight: SIZES.base,
                  }}
                />
              }
            />
            <FormInput
              containerStyle={{
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.error,
              }}
              placeholder="Designation"
              value={designation}
              onChange={(text) => setDesignation(text)}
              prependComponent={
                <Image
                  source={require('../../assets/icons/arrow_right_up.png')}
                  style={{
                    width: 25,
                    height: 25,
                    marginRight: SIZES.base,
                  }}
                />
              }
            />
            <FormInput
              containerStyle={{
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.error,
              }}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChange={(text) => setPassword(text)}
              prependComponent={
                <Image
                  source={require('../../assets/icons/lock.png')}
                  style={{
                    width: 25,
                    height: 25,
                    marginRight: SIZES.base,
                  }}
                />
              }
            />
            <FormInput
              containerStyle={{
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.error,
              }}
              placeholder="Confirm Password"
              secureTextEntry={click}
              value={confirmPassword}
              onChange={(text) => setConfirmPassword(text)}
              prependComponent={
                <Image
                  source={require('../../assets/icons/lock.png')}
                  style={{
                    width: 25,
                    height: 25,
                    marginRight: SIZES.base,
                  }}
                />
              }
              appendComponent={
                <TouchableOpacity onPress={() => setClick(!click)}>
                  <Image
                    source={
                      !click
                        ? require('../../assets/icons/eye.png')
                        : require('../../assets/icons/eye-off.png')
                    }
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.base,
                    }}
                  />
                </TouchableOpacity>
              }
            />
            <TextButton
              label={'Sign Up'}
              contentContainerStyle={{
                height: 55,
                borderRadius: SIZES.radius,
                margin: 10,
              }}
              labelStyle={{
                color: COLORS.light,
                ...FONTS.h4,
              }}
              onPress={() => handleSignUp()}
            />
          </KeyboardAwareScrollView>
        </View>
      </Shadow>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  authContainer: {
    width: SIZES.width - SIZES.padding * 2,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.light,
    paddingHorizontal: 20,
  },
})
