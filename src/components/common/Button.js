import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({ onPress, children }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={onPress}
  >
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
)

const styles = {
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  text: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export { Button }
