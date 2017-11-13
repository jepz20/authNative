import React, { Component } from 'react'
import { Button, Card, CardSection, Input, Spinner } from './common'
import firebase from 'firebase'
import { Text } from 'react-native'

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false }

  onButtonPress = () => {
    const { email, password } = this.state
    this.setState({ error: '', loading: true })
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => this.onLoginSuccess())
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => this.onLoginSuccess())
          .catch(() => {
            this.setState({ error: 'Authentication Failed', loading: false })
          })
      })
  }

  onLoginSuccess = () => {
    this.setState({
      loading: false,
      error: '',
      password: '',
      email: ''
    })
  }

  renderButton = () => {
    if (this.state.loading) {
      return <Spinner size='small' />
    }

    return (
      <Button onPress={this.onButtonPress}>Log in</Button>
    )
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            label='Email'
            placeholder='test@test.com'
          />
        </CardSection>
        <CardSection>
          <Input
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            label='Password'
            placeholder='password'
            secureTextEntry
          />
        </CardSection>
        <Text style={styles.error}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  error: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm
