import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  FlatList,
  RefreshControl,
  Alert,
  TouchableOpacity,
  View
} from 'react-native'
import {connect} from 'react-redux'
import fetchPosts from '../../redux/actions/postActions'
import styles from './styles'

class HomePage extends Component{

    constructor(props){
        super(props)
        this._onRefresh = this._onRefresh.bind(this)
    }

    _renderItem = child => {
        
        return (
            <TouchableOpacity 
            onPress={() => this._onChildClick(child)}>
                <View style={styles.childContainerStyle}>
                    <Text style={styles.postTitleStyle}>{child.item.title}</Text>
                    <Text>{child.item.description}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _keyExtractor = item => item.title

    _onRefresh(){
        this.props.fetchPosts()
    }

    _onChildClick = (child) => {
        this.props.navigation.navigate('Detail',{
            id : child
        })
    }

    componentDidMount(){
        console.log("Starting fetch")
        this.props.fetchPosts()
    }

    render(){
        return(
            <FlatList
                data={this.props.posts.posts}
                renderItem = {this._renderItem}
                keyExtractor = {this._keyExtractor}
                refreshControl = {
                    <RefreshControl
                        refreshing={this.props.posts.isRefreshing}
                        onRefresh={this._onRefresh}
                    />
                }
                showsVerticalScrollIndicator  = {false}
                showsHorizontalScrollIndicator = {false}
            />
        )
    }    

}

const mapStateToProps = (state) => {
    return {
        posts : state.Post
    }
}

export default connect(mapStateToProps, {fetchPosts})(HomePage)