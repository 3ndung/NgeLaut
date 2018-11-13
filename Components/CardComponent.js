import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card,CardItem,Body,Left } from 'native-base';


class CardComponents extends Component {
    constructor(props){
        super(props)
    }
    
 
    render(){
        const {tx,ur1,tanggal,teks} = this.props;
        return(
            <Card>
              
                <CardItem>
                    <Left>
                        
                        <Body>
                            <Text> {tx}</Text>
                            <Text>{tanggal}</Text>
                        </Body>
                        
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image
                    style={{height: 250, width: null, flex: 1}}
                    source={{uri: ur1}}
                    />
                </CardItem>
                <CardItem>
                    <Text>
                           {teks}
                    </Text>
                </CardItem>
                
            </Card>
        )
    }
}

export default CardComponents;





const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});