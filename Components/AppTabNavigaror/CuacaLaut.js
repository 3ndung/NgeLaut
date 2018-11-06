import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Icon, Container, Content } from 'native-base';
import CardComponent from '../CardComponent';
//import Cheerio from 'cheerio-without-node-native';
import Cheerio from 'react-native-cheerio';

class CuacaLaut extends Component {
    constructor(props){
        super(props)
       this.state= {
           
           
           
        }
    }

    static navigationOptions = {
       // title : "Cuaca Laut Indonesia",
       tabBarIcon:({tintColor}) => (
        <Icon 
        name="ios-home"
        style={{color:tintColor}}
       />
       )
    }

 

    render(){
        
        return(
            <Container style={style.container}>
                <Content>
                    <ScrollView>
                    <CardComponent 
                    
                    />
                   
                    </ScrollView>
                   
                </Content>
            </Container>
        )
    }
}

export default CuacaLaut;





const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',

    }
});

