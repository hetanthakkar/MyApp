import * as React from 'react';
import { Text, View, StyleSheet ,TextInput,Image,Button} from 'react-native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width)/100;
const screenHeight = Math.round(Dimensions.get('window').height)/100;


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          User Login
           </Text>
        <TextInput
      placeholder="          Username"
      style={styles.myText}
      onChangeText={
        fname => this.setState({fname})
      }
      />

         <TextInput
      placeholder="          Password"
      style={styles.myText}
      onChangeText={
        email => this.setState({email})
      }
      />
 <Button title="Log in" style={styles.button1}/>
   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#0296FF',
  },
  paragraph: {
  left:screenWidth,
  top:screenHeight*-20,
      fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button1: {
    width:'50%',
   fontSize: 48,
   borderRadius:20,
    textAlign: 'center',
  },
  
  myText:{
    color:'red',
    fontSize:18,
    height:screenHeight*7,
    backgroundColor:'#E6E6E6',
    borderWidth:1.2,borderColor:'#d6d0cf',borderRadius:10,
    marginLeft:screenWidth*3,marginBottom:screenWidth*8, padding:screenWidth*2, width:screenWidth*95,
  }
});
