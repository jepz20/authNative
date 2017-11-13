import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Header = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1e1e1',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    marginBottom: 10
  },
  text: {
    fontSize: 30
  }
})

export { Header }
