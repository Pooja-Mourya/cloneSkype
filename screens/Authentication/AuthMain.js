import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { TextButton, FormInput } from '../../components'
import { SIZES, COLORS, FONTS } from '../../constants'
import { Shadow } from 'react-native-shadow-2'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const AuthMain = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [click, setClick] = useState(true)

  function SignInFunction() {
    return (
      <Animated.View
        style={{ marginTop: SIZES.padding, height: SIZES.height / 2.6 }}
      >
        <Shadow>
          <View style={styles.authContainer}>
            <Text
              style={{
                width: '60%',
                lineHeight: 45,
                color: COLORS.dark,
                ...FONTS.dark,
                fontSize: SIZES.h1,
                paddingHorizontal: 10,
              }}
            >
              Sign in to continue
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
              <View style={{ alignItems: 'flex-end' }}>
                <TextButton
                  label={'Forgot password'}
                  contentContainerStyle={{
                    // marginTop: 10,
                    backgroundColor: 'null',
                  }}
                  labelStyle={{
                    color: COLORS.support1,
                    ...FONTS.h4,
                    paddingHorizontal: SIZES.padding,
                  }}
                />
              </View>
              <TextButton
                label={'Log In'}
                contentContainerStyle={{
                  height: 55,
                  borderRadius: SIZES.radius,
                  margin: 10,
                }}
                labelStyle={{
                  color: COLORS.light,
                  ...FONTS.h4,
                }}
                onPress={() => navigation.navigate('MyTab')}
              />
            </KeyboardAwareScrollView>
          </View>
        </Shadow>
      </Animated.View>
    )
  }

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.lightGrey,
        justifyContent: 'space-around',
      }}
    >
      <View>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{
            alignSelf: 'center',
            marginTop: SIZES.padding * 2,
            width: 50,
            height: 50,
          }}
        />
      </View>

      <SignInFunction />

      <View style={{ alignItems: 'center' }}>
        <Text>OR login with</Text>
        <View style={{ flexDirection: 'row', marginVertical: 20 }}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/google.png')}
              style={{ width: 40, height: 40, marginHorizontal: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/twitter.png')}
              style={{ width: 40, height: 40, marginHorizontal: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/linkedin.png')}
              style={{ width: 40, height: 40, marginHorizontal: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default AuthMain

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    width: SIZES.width - SIZES.padding * 2,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.light,
  },
})
