import React, { Component } from 'react'
import {
  Text,
  Alert,
  TouchableOpacity,
  View
} from 'react-native'
import styles from './styles'

export default class DetailPage extends Component{

    constructor(props){
        super(props)
    }

    render(){
        const { navigation } = this.props
        const itemId = navigation.getParam('id', 0)

        return(
            <View>
                <Text>{itemId}</Text>
            </View>
        )
    }

}