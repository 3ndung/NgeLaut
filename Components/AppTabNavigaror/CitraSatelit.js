import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView  } from 'react-native';
import { StackNavigator ,TabNavigator } from 'react-navigation';
import CardComponent from '../CardComponent';
import { Icon, Container, Content } from 'native-base';


class CitraSatelit extends Component {
    
    render(){

        const c1 = 'https://dataweb.bmkg.go.id/Satelit/IMAGE/HIMA/H08_EH_Indonesia.png';
        let D2 = new Date().toISOString();
        let thn = D2.substring(0,4);
        let bln = D2.substring(5,7);
        let tgl = D2.substring(8,10);
        let tanggalan = tgl+"-"+bln+"-"+thn;

        return(
            <Container style={style.container}>
                <Content>
                    <ScrollView>
                    <CardComponent
                    tx = " Citra Satelit Perairan Indoneisa"
                    ur1={c1} 
                    tanggal ={tanggalan}
                    teks = " Citra Satelit Himawari-8 EH"
                    
                    />

                    <Text stye={style.buatText}>
                    
                    
                    menunjukkan suhu puncak awan yang didapat dari pengamatan radiasi pada panjang gelombang 10.4 mikro meter
                    warna hitam atau biru menunjukkan tidak terdapat pembentukan awan yang banyak (cerah),
                    sedangkan semakin dingin suhu puncak awan, dimana warna mendekati jingga, 
                    menunjukan pertumbuhan awan yang signifikan dan berpotensi terbentuknya awan Cumulonimbus.
                    </Text>

                   
                    </ScrollView>
                   
                </Content>
            </Container>
        )
    }
}

export default CitraSatelit;





const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffff',
 
    },
    buatText:{
        marginLeft: 5,
        marginRight: 5,
    }
});