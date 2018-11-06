import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { StackNavigator ,TabNavigator } from 'react-navigation';
import { Icon } from 'react-base';
import CuacaLaut from './AppTabNavigaror/CuacaLaut';
import PrakiranCuaca from './AppTabNavigaror/PrakiranCuaca';
import CitraSatelit from './AppTabNavigaror/CitraSatelit';


class MainScreen extends Component {
    static navigationOptions = {
        title : "NgeLautYuk",
}
    render(){
        return(
            <AppTabNavigator />
        )
    }
}

export default MainScreen;

const AppTabNavigator = TabNavigator({
    CuacaLaut:{
        screen: CuacaLaut
    },
    PrakiranCuaca:{
        screen: PrakiranCuaca
    },
    CitraSatelit:{
        screen: CitraSatelit
    }
},
{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        style: {
            ...Platform.select({
                android: {
                    backgroundColor: 'white'
                }
            })
        },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIcon: true
    }
}
)



const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});