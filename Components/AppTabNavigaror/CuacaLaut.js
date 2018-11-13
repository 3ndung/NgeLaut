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
           urx: null,
           
           
        }
    }



 

    render(){

        let D2 = new Date().toISOString();
        let thn = D2.substring(0,4);
        let bln = D2.substring(5,7);
        let tgl = D2.substring(8,10);
        //let AB0 = 'http://peta-maritim.bmkg.go.id/output/inawaves/'+thn+'/'+bln+'/'+thn+bln+tgl+'00/indonesia/swh.gif';
        let AB0 = 'http://peta-maritim.bmkg.go.id/output/inawaves/2018/11/2018111300/indonesia/swh.gif';
        //let AB0 = 'https://cdn.bmkg.go.id/datamkg/meteorologi/images/Maritim_Peta_Gelombang_2.png';
        //let AB1 = 'http://peta-maritim.bmkg.go.id/output/inaflows/'+thn+'/'+bln+'/'+thn+bln+tgl+'00/indonesia/csd_0.gif';
        let AB1 = 'http://peta-maritim.bmkg.go.id/output/inaflows/2018/11/2018111300/indonesia/csd_0.gif';
        let tanggalan = tgl+"-"+bln+"-"+thn;

       
        
        return(
            <Container style={style.container}>
                <Content>
                    <ScrollView>
                    <CardComponent
                    tx= "Ocean Forecast System (OFS) "
                    ur1={AB0} 
                    tanggal ={tanggalan}
                    teks = " Prediksi Tinggi Gelombang "
                    
                    />
                    <CardComponent
                    tx= " Sea Current - Surface "
                    ur1={AB1} 
                    tanggal ={tanggalan}
                    teks = " Kecepatan dan Arah Arus Laut "
                    
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

