import React, {Component} from 'react'
import {Button, Text, TextInput, View} from 'react-native'
import {connect} from 'react-redux'

import {sessionLoading} from '../../redux/actions/sessionActions'
import styles from './styles'

class LoginModal extends Component {

    state = {
      email : '', 
      password : '',
      isLogginIn : true
    }

    constructor(props){
      super(props)
      this.onLogin = this.onLogin.bind(this)
    }

    onLogin(){
      this.props.dispatch(sessionLoading(this.state.email, this.state.password))
    }

    render() {
      return (
        <View style={styles.loginContainer}>

          <Text style={styles.loginText}>
            M/Clone
          </Text>

          <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => this.setState({email : text})}
                    keyboardType="email-address"
                    placeholder = "Email"
                />
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    onChangeText={(text) => this.setState({password : text})}
                    placeholder="Password"
                />
          <Button
            onPress={this.onLogin}
            title="Login"
          />
          {this.props.loginStatus.error && <Text style={styles.errorText}>Error : {this.props.loginStatus.error}</Text>}
        </View>
      );
    }
  }

  const mapStateToProps = state => {
    return (
        {
            loginStatus : state.Session
        }
    )
}

  export default connect(mapStateToProps,null)(LoginModal)