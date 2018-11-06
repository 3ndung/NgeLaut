import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator ,TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import CardComponent from '../CardComponent';

class PrakiranCuaca extends Component {
    static navigationOptions = {
        // title : "Cuaca Laut Indonesia",
        tabBarIcon:({tintColor}) => (
         <Icon 
         name="ios-search"
         style={{color:tintColor}}
        />
        )
 
        
 }   
    render(){
        return(
            <View style={style.container}>
            <Text>Hi Bagus Main Cuaca Today</Text>
            </View>
        )
    }
}

export default PrakiranCuaca;





const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});