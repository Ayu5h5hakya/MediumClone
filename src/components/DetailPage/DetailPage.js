import React, { Component } from 'react'
import {
  Text,
  Button,
  ActivityIndicator,
  Alert,
  View
} from 'react-native'
import styles from './styles'
import {connect} from 'react-redux'
import {fetchDetails} from '../../redux/actions/detailActions'

class DetailPage extends Component{

    static navigationOptions = ({navigation}) => {
        return {
            title : navigation.getParam('id', 0).item.title
        }
    }

    constructor(props){
        super(props)
        this.onArticleSave = this.onArticleSave.bind(this)
    }

    componentDidMount(){
        const {navigation} = this.props
        this.props.fetchDetails(navigation.getParam('id', 0).item.id)
    }

    onArticleSave(){
        if(!this.props.loggedIn) this.props.navigation.navigate("Login");
        else {
            Alert.alert('Currently logged as ' + this.props.currentUser.email)
        }
    }

    render(){

        let content = <ActivityIndicator size="large"/>

        if(this.props.details.body.length > 0){
            content = <View>
            <Text style={styles.dateStyle}>{this.props.details.body[0].dateCreated}</Text>
            <Text style={styles.bodyStyle}>{this.props.details.body[0].body}</Text>
            <Text style={styles.authorStyle}>{this.props.details.body[0].author}</Text>
            <Text style={styles.viewStyle}>{this.props.details.body[0].views}</Text>
            <Text style={styles.viewStyle}>{this.props.details.body[0].likes}</Text>
            <Button
                title="Comment"
                onPress={this.onArticleSave}
            />
        </View>
        }

        return(
            <View>
                {content}
            </View>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        details : state.Detail,
        loggedIn: state.Session.user != null,
        currentUser : state.Session.user
    }
}

export default connect(mapStateToProps, {fetchDetails})(DetailPage)