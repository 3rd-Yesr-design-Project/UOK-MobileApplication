import React from 'react';
import {Button, Text, View,StyleSheet,TextInput,TouchableOpacity,Image,StatusBar,LayoutAnimation} from 'react-native';
export default class Result extends React.Component {
  static navigationOptions ={
    header : null
  }
  
  

  handleLogin = () => {
         const {email,password} = this.state
  }
  render() {
    return (
<View style={styles.container}>

   
        <Text>nnnnnnnnnnncar</Text>
        <Text>car</Text>
        <Text>car</Text>
        <Text>car</Text>
       

        </View>
      
      
    );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
},

bar: {
  
  
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'absolute',
  bottom: 0,
  backgroundColor:'gray',
  width:'100%'
  
},
image:{
  width:30,
  height:30,
  

},
code:{
  position: 'absolute',
  bottom: 0
}
});