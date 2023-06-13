import React from 'react'
import { View, InputText, TextInput } from 'react-native'
import { FONTS, SIZES, COLORS } from '../constants'

const FormInput = ({
  containerStyle,
  inputContainerStyle,
  placeholder,
  inputStyle,
  value = '',
  prependComponent,
  appendComponent,
  onChange,
  onPress,
  editable,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  maxLength,
  placeholderTextColor,
}) => {
  return (
    <View style={{ ...containerStyle }}>
      <View
        style={{
          flexDirection: 'row',
          height: 55,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          alignItems: 'center',
          backgroundColor: COLORS.lightGrey,
          ...inputContainerStyle,
        }}
      >
        {prependComponent}
        <TextInput
          style={{
            flex: 1,
            paddingVertical: 0,
            ...FONTS.body3,
          }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          keyboardAppearance={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCompleteType={autoCompleteType}
          maxLength={maxLength}
          onChange={(text) => onChange(text)}
          onPressIn={onPress}
          editable={editable}
        />
        {appendComponent}
      </View>
    </View>
  )
}

export default FormInput
