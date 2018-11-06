import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from './Components/MainScreen';
import { Icon } from 'react-base';

export default class App extends Component {
 

    render(){
        return(
            <AppStackNavigator />
        )
    }

}

const AppStackNavigator= StackNavigator({
    Main:{
        screen: MainScreen
    }
})

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});