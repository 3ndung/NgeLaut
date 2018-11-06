import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator ,TabNavigator } from 'react-navigation';
import { Icon,Card,CardItem,Thumbnail,Body,Left,Right,Button } from 'native-base';

class CardComponents extends Component {
    constructor(props){
        super(props)
    }
    
 
    render(){
        let {ur1,ur2} = this.props;
        return(
            <Card>
              
                <CardItem>
                    <Left>
                        <Body>
                            <Text> Ocean Forecast System (OFS)</Text>
                            <Text>date</Text>
                        </Body>
                        
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image
                    style={{height: 250, width: null, flex: 1}}
                    source={{uri: 'http://peta-maritim.bmkg.go.id/output/inawaves/2018/11/2018110600/indonesia/swh.gif'}}
                    />
                </CardItem>
                <CardItem>
                    <Text>
                           Significat Wave Height 
                    </Text>
                </CardItem>
                <CardItem>
                    <Left>
                        <Body>
                            <Text> Ocean Forecast System (OFS)</Text>
                            <Text>date</Text>
                        </Body>
                        
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image
                    style={{height: 250, width: null, flex: 1}}
                    
                    source={{uri: 'http://peta-maritim.bmkg.go.id/data/output/inawaves/2018/11/2018110500/indonesia/ws.gif'}}
                    />
                </CardItem>
                <CardItem>
                    <Text>
                           Surface Wind 
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