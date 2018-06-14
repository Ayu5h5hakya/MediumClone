import React, { Component } from 'react'
import {
  Text,
  Alert,
  TouchableOpacity,
  View
} from 'react-native'
import styles from './styles'
import {connect} from 'react-redux'
import fetchDetails from '../../redux/actions/detailActions'

class DetailPage extends Component{

    static navigationOptions = ({navigation}) => {
        return {
            title : navigation.getParam('id', 0).item.title
        }
    }

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchDetails()
    }

    render(){

        return(
            <View>
                <Text style={styles.dateStyle}>{this.props.details.body.dateCreated}</Text>
                <Text style={styles.bodyStyle}>{this.props.details.body.body}</Text>
                <Text style={styles.authorStyle}>{this.props.details.body.author}</Text>
                <Text style={styles.viewStyle}>{this.props.details.body.views}</Text>
                <Text style={styles.viewStyle}>{this.props.details.body.likes}</Text>
            </View>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        details : state.Detail
    }
}

export default connect(mapStateToProps, {fetchDetails})(DetailPage)