import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator ,TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import CardComponent from '../CardComponent';

class CitraSatelit extends Component {
    static navigationOptions = {
        // title : "Cuaca Laut Indonesia",
        tabBarIcon:({tintColor}) => (
         <Icon 
         name="satelite"
         style={{color:tintColor}}
        />
        )
 
        
 }   
    render(){
        return(
            <View style={style.container}>
            <Text>CitraSatelit Indonesia Hari Ini</Text>
            </View>
        )
    }
}

export default CitraSatelit;





const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});