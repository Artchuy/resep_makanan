import * as React from 'react';
import { Text, View, StyleSheet,FlatList,ActivityIndicator,Button,ImageBackground,Image,ScrollView,Icon  } from 'react-native';
import { Constants } from 'expo';
import { Ionicons } from '@expo/vector-icons';
export default class HalamanDetail extends React.Component {
  static navigationOptions = {
    header: null
  };

  _renderItem = ({item}) => (
    <View style={styles.cara}>
    <Text style={{
  fontWeight: 'bold',}}><Ionicons name="md-done-all" size={15} color="black" style={{paddingLeft:5,}}/> {item}</Text>
  </View>
  );
  
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'NO-ID');
    const ingredients = navigation.getParam('ingredients', 'some default value');
    const steps = navigation.getParam('steps', 'some default value');
    const imageURL = navigation.getParam('imageURL', 'some default value');
    const imageUrldata =imageURL.replace();//untuk tipe data string
    return (
      <View style={{ flex: 1}}>
      
        <ScrollView>
         <ImageBackground source={{uri:imageUrldata}} style={styles.gambarDetail} imageStyle={{ borderRadius: 10 }}>
     <Ionicons name="md-arrow-back" size={32} color="white" onPress={() => this.props.navigation.goBack()} style={{marginTop:20,paddingLeft:5}}/>
   
    <Text style={styles.nama}>{name}</Text>
  </ImageBackground>
       
        <View style={{backgroundColor:'#ecf0f1', width:Constants.statusBarWidth,height:40,margin:20,alignContent:'center',alignItems:'center',paddingTop:10}}>
          <Text>Langkah-langkah</Text>
        </View>
        <View style={{backgroundColor:'#eeeeee', height:'100%',alignContent:'center',padding:10,}}>
        <FlatList
          data={steps}
          renderItem={this._renderItem
        }
          keyExtractor={({id}, index) => id}
        />
        </View>
      </ScrollView>
      </View>
    );
  }

}
const styles = StyleSheet.create({
 cara:{
   padding:10,
    marginLeft:5,
    marginRight:5,
   width:Constants.statusBarWidth,
   borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    
 },
 nama:{textAlign:'justify',paddingTop:150,paddingLeft:20,color:'white',
  fontSize:20,
  fontWeight: 'bold',
  fontFamily:'monospace'
  
  },
 gambarDetail:{
   width: '100%', height: 250
 }

});
