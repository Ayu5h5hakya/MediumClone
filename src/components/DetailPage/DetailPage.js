import React, { Component } from 'react'
import {
  Text,
  Button,
  ActivityIndicator,
  View
} from 'react-native'
import styles from './styles'
import {connect} from 'react-redux'
import {fetchDetails, saveDetails} from '../../redux/actions/detailActions'

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
        this.props.saveDetails(this.props.details.body[0])
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
                title="Save"
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
        details : state.Detail
    }
}

export default connect(mapStateToProps, {fetchDetails, saveDetails})(DetailPage)