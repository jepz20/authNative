/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import firebase from 'firebase'
import React, { Component } from 'react'
import { View } from 'react-native'
import LoginForm from './src/components/LoginForm'
import { Header, Button, Spinner } from './src/components/common/'

export default class App extends Component {
  state = {
    loggedIn: null
  }

  componentWillMount () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDyd39n9WsH8f4QZN8Ep-cjCOz5hF2Fbi4',
      authDomain: 'authjepz.firebaseapp.com',
      databaseURL: 'https://authjepz.firebaseio.com',
      projectId: 'authjepz',
      storageBucket: 'authjepz.appspot.com',
      messagingSenderId: '407364719785'
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log out
          </Button>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner />
    }
  }

  render () {
    return (
      <View>
        <Header text='Authentication' />
        {this.renderContent()}
      </View>
    )
  }
}
