import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Pressable} from 'react-native';
import Icon from "react-native-ico-material-design";

var iconHeight=26;
var iconWidth=26;

export default class App extends React.Component{
  state={
    screenText:'Press a button!'
  }

  changeText=(text)=>{
    console.log(text + 'has been pressed!')
    this.setState({
      screenText:text
    })
  }

  render(){
    return (
      <View style={styles.container}>
      <View>
        <Text style={{fontsize:30, color:'white'}}>{this.state.screenText}</Text>
        <StatusBar style="light" />
        </View>

        <View style={styles.NavContainer}>
          <View style={styles.Navbar}>
            <Pressable onPress={()=> this.changeText('Favourites')} style={styles.IconBehave}>

            </Pressable>
          </View>
        </View>
      </View>
    );
  }
}
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3962ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  NavContainer:{
    position: 'absolute',
    alignItems:'items',
    bottom:20,
  },
  Navbar:{
    flexDirection:'row',
    backgroundColor:'#eee',
    width:'90%',
    justifyContent:'space evenly',
    borderRadius:40
  },
  IconBehave:{
    padding:14
  }
});
