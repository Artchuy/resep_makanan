import * as React from 'react';
import { Text, View, StyleSheet,FlatList,ActivityIndicator,Button,ImageBackground,Image,TouchableHighlight   } from 'react-native';
import { Constants } from 'expo';

export default class HalamanAwal extends React.Component {
  static navigationOptions = {
    title: 'Resep Makanan',
  };
  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
    }
  }

  //state digunakan untuk di satu halaman saja
  //props untuk kirim halaman ke halaman lain

  //componentDidMount ->> yang pertama kali di jalankan saat aplikasi di buka
  componentDidMount(){
    return fetch('http://rgde.riset.pcr.ac.id/menu.json', // <-- data diambil dari sini dalam bentuk json (bisa menggunakan firebase)
      {method: 'GET'}) // method get yang akan digunakan untuk mengambil data dari server
      .then((response) => response.json()) // simpan hasil pengambian data dalam variabel json, lalu di konversikan ke json
      .then((responseJson) => { // ketika sudah menjadi json akan disimpan di datasource yang diambil oleh responJson

        this.setState({ // deklarasi awal true (harus loading terlebih dahulu)
          isLoading: false, //jika sudah terload , kita akan meng false 
          dataSource: responseJson, // disimpan
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      }); // try catch
  }
  _renderItem = ({item}) => ( // method yang dibuat menggunakan "_" untuk memberi tahu bahwa ada method
     <TouchableHighlight onPress={() => { //ketika button ditekan
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', { //simpan di prop -> panggil navigation -> panggil nama yang telah di daftarkan "Details" pada app.js
              name: item.name,
              ingredients: item.ingredients,
              steps: item.steps,
              imageURL: item.imageURL,
            }); // data didapatkan dari json
          }}>
     <ImageBackground source={{uri:item.imageURL}} style={styles.gambar} imageStyle={{ borderRadius: 10 }}>
    <Text style={styles.nama}>{item.name}</Text> 
  </ImageBackground>
 
  </TouchableHighlight> // agar list dapat di klik
  );

  render() {
     if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      
              
         <FlatList
          data={this.state.dataSource}
          renderItem={this._renderItem}
          keyExtractor={({id}, index) => id}
        />
      
    );
  }
}

const styles = StyleSheet.create({
 
  nama:{textAlign:'center',padding:10,color:'white',
 fontFamily: 'open-sans-bold', fontSize: 30,
  fontWeight: 'bold',
  
  },
  gambar:{
    width: Constants.statusBarWidth, height: 200,margin:10,
  tintColor:'black'
  },
});
