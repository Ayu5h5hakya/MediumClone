import {NavigationActions, createStackNavigator} from 'react-navigation'
import HomePage from './components/HomePage/HomePage'
import DetailPage from './components/DetailPage/DetailPage'
import LoginModal from './components/LoginModal/LoginModal' 

let _navigator

const NewStack = createStackNavigator({
    Home : HomePage,
    Detail : DetailPage
  },{
    navigationOptions : {
      title :'Medium'
    }
  })
  
  const RootStack = createStackNavigator({
    New : NewStack,
    Login : LoginModal
  },{
    initialRouteName : 'New',
    headerMode : 'none'
  })

function setTopLevelNavigator(navigatorRef){
    _navigator = navigatorRef
}

function navigate(routeName, params){
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}

function goBack(){
    _navigator.dispatch(
        NavigationActions.back()
    )
}

export default {
    navigate,
    goBack,
    setTopLevelNavigator,
    RootStack
}
















