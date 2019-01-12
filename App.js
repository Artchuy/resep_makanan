import * as React from 'react';
import { Text,Button, View, StyleSheet  } from 'react-native';
import { Constants } from 'expo';

import { createStackNavigator, createAppContainer } from 'react-navigation'; 

import HalamanAwal from './components/HalamanAwal';
import HalamanDetail from './components/HalamanDetail';
const RootStack = createStackNavigator(
  {
    Home: HalamanAwal,
    Details: HalamanDetail,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack)

export default class App extends React.Component {
  

  render() {
   
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({

});
