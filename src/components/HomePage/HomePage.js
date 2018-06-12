import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  FlatList,
  RefreshControl,
  View
} from 'react-native'
import {connect} from 'react-redux'

export default class HomePage extends Component{

    state = {isRefreshing : false}

    constructor(props){
        super(props)
        this._onRefresh = this._onRefresh.bind(this)
    }

    _onRefresh(){
        this.setState({isRefreshing : true})
    }

    render(){
        return(
            <FlatList
                refreshControl = {
                    <RefreshControl
                        refreshing = {this.state.isRefreshing}
                        onRefresh = {this._onRefresh}
                    />
                }
            />
        )
    }    

}