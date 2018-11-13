import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import CuacaLaut from './AppTabNavigaror/CuacaLaut';
import PrakiranCuaca from './AppTabNavigaror/PrakiranCuaca';
import CitraSatelit from './AppTabNavigaror/CitraSatelit';
import { Icon } from 'react-native-elements';


class MainScreen extends Component {
    static navigationOptions = {
        title : "NgeLautYuk",
        backgroundColor: '#2979FF',
        
}
    render(){
        return(
            <AppTabNew />
            
        )
    }
}

export default MainScreen;


const AppTabNew = createBottomTabNavigator({
    CuacaLaut:{
        screen: CuacaLaut,
        navigationOptions:{
            tabBarLabel: 'Cuaca Laut',
            tabBarIcon: ({tintColor}) => (
                <Icon 
                
                name="waves"
                type="material"
                color={tintColor} size={24}/>
            )
        }
    },
    PrakiranCuaca:{
        screen: PrakiranCuaca,
        navigationOptions:{
            tabBarLabel: 'Harga Ikan'
        }

    },
    CitraSatelit:{
        screen: CitraSatelit,
        navigationOptions:{
            tabBarLabel: 'Citra Satelit'
        }
    }
},{
    order:['CuacaLaut','CitraSatelit','PrakiranCuaca'],
    tabBarOptions:{
        activeBackgroundColor:'#0288D1',
        activeTintColor:'white',
        inactiveBackgroundColor:'#01579B',
        inactiveTintColor:'orange'
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