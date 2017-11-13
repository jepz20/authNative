import React from 'react'
import { TextInput, View, Text } from 'react-native'

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        autoCorrect={false}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = {
  input: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  container: {
    height: 40,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  }
}

export { Input }
