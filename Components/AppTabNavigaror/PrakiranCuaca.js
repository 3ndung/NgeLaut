import React, { Component } from 'react';
import { StyleSheet, Text, View ,ScrollView ,FlatList, ListItem} from 'react-native';
import { StackNavigator ,TabNavigator } from 'react-navigation';
import { Icon, Container, Content } from 'native-base';
import CardComponent from '../CardComponent';
//import dix from './FetchData';

class PrakiranCuaca extends Component {
    constructor(props){
        super(props)
        this.state={
               Data : [] ,
               DataKemarin : [],
               isLoading: true
        }
    }


   /* state={
        Data: [] 
 }*/

   /* async componentDidMount(){
        const Data = await dix.ambilData();
        this.setState(({Data}));
        console.log(Data);
   } */

   renderItem = ({item}) => {
       return(
        <View style={style.flatview}>
        <Text style={style.name}>{item.nama_pelabuhan} : </Text>
        <Text style={style.email}>{item.nama_jenis_ikan} : </Text>
        <Text style={style.email}>{item.harga_produsen_avg} </Text>
        </View>
       )
      
   }

   renderSeparator = () =>{
       return(
           <View style={
               {
                   height:1,
                   width:"100%",
                   backgroundColor:'black'

               }
           }>

           </View>
       )
   }

   componentDidMount(){
       const uri='http://pipp.djpt.kkp.go.id/themes/bdp-website-pipp/assets/json/harga_ikan_dominan.json';
       fetch(uri)
        .then((res) => res.json())
        .then((resJson) => {
            this.setState({
                Data: resJson.data_ikan,
                DataKemarin: resJson.data_ikan_sebelum,
                isLoading: false,

            })
        } )
        .catch((e) => {
            console.log(e)
        })
   }
    




 
    render(){
        return(
            <View>
                <View>
                <Text style={style.h2text}>
                       Data Penjualan Ikan Saat ini
             </Text>   
            <FlatList
                data={this.state.Data}
                showsVerticalScrollIndicator={true}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index}
                ItemSeparatorComponent={this.renderSeparator}
                />
                </View>


            

            </View>
          );
    }
}

export default PrakiranCuaca;





const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffff',

    },
    h2text: {
      marginTop: 10,
      marginLeft: 5,
      justifyContent:'center',  
      fontFamily: 'Helvetica',
      fontSize: 18,
      fontWeight: 'bold',
    },
    flatview: {
      justifyContent: 'center',
      paddingTop: 30,
      borderRadius: 2,
      flex: 1,
      flexDirection: 'row',
    },
    name: {
      fontSize: 12,
      justifyContent:'flex-start'
    },
    email: {
      color: 'red',
      fontSize: 12,
      justifyContent: 'space-around'
    }
});