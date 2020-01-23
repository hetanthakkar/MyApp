import * as React from 'react';
import { Text, View, StyleSheet,TextInput,Image,SectionList,TouchableOpacity,Button,ScrollView} from 'react-native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width)/100;
const screenHeight = Math.round(Dimensions.get('window').height)/100;

export default class App extends React.Component {
  render() {
   
    return (
<View style={styles.container}>
       <TextInput
      style={{ height: screenHeight*7, borderColor: 'gray', borderWidth: 2 ,backgroundColor:'white',borderRadius:12,position:'absolute',
      left:screenWidth*2 ,top:screenHeight*7,width:screenWidth*95  }}
      onChangeText={text => onChangeText(text)}
      placeholder=" Search by Name , Skill or Id"
      placeholderTextColor={'black'}
      placeholderTextSize={100}
    />
        <Image
          style={{height: screenHeight*15, borderRadius:100,width:screenWidth*25, position:'absolute',
      left:screenWidth*35 ,top:screenHeight*18}}
                source={{uri: 'https://scontent.famd1-2.fna.fbcdn.net/v/t1.0-9/p960x960/41537156_102366014060037_648081359188787200_o.jpg?_nc_cat=101&_nc_ohc=VpE6qmxAykIAQntcdCVRuL-UONSSAZQkuozHoTx7maclHeSZBg-PA4ATw&_nc_ht=scontent.famd1-2.fna&_nc_tp=1&oh=1a2311d3c11a31b3b4a467cedc3dfcf5&oe=5EB0902A'}}
        />
        <Text style={{position:'absolute',left:screenWidth*37 ,top:screenHeight*35,fontSize:18,textAlign:'center',fontWeight:'bold',fontFamily: 'Arial',}}>
        ID:s4d5f4
        {'\n'}Hetan Thakkar
        </Text>
        <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
      	<View style={{flex: 2, flexDirection: 'row',  alignItems:'center', justifyContent: 'center', top:screenHeight*9}}>
         <TouchableOpacity 
      onPress={() =>  console.log("hi")}
        style={{
          width: screenWidth*45,
          borderRadius: 35,
          backgroundColor: '#40464d', 
         height:screenHeight*25,
         
        }}>
        <Text style={{ color: 'white', fontWeight: 'bold',fontSize:30,top:screenHeight*-4,right:screenWidth*-6 }}>
          {'\n'}{'\n'}Requests
        </Text>
         <Image
          style={{width: 50, height: 50,borderRadius:20,right:screenWidth*-16,top:screenHeight*0.1}}
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-Jt2624wXe493IhqTweNX9q60d627syKEjE4TIppi0iwt_w0&s'}}
        />
    </TouchableOpacity> 
     <TouchableOpacity 
      onPress={() =>  console.log("hi")}
        style={{
          width: screenWidth*45,
          borderRadius: 35,
          backgroundColor: '#282c31', 
          height:screenHeight*25,
marginLeft:screenWidth*3,

        }}>
        <Text style={{ color: 'white', fontWeight: 'bold',textAlign:'center',fontSize:30,top:screenHeight*-4 ,right:screenWidth}}>
          {'\n'}{'\n'}Message
        </Text>
        <Image
          style={{width: 50, height: 50,borderRadius:20,right:screenWidth*-16,borderRadius:1}}
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CBNp6Qu_KImZW5GyC92w9H_EFpIqCMn_6OyIC7WReK3x81Dh&s'}}
        />
    </TouchableOpacity>
        </View>

     <View style={{flex: 2, flexDirection: 'row', alignItems:'center',top:screenHeight*3}}>
     <TouchableOpacity 
      onPress={() => console.log("hi")}
        style={{
          width: screenWidth*45,
          borderRadius: 35,
          backgroundColor: '#282c31', 
          height:screenHeight*25,
	marginRight:'0.5%',
	marginLeft:'1%',
        }}>
        <Text style={{ color: 'white', fontWeight: 'bold',textAlign:'center',fontSize:30,top:screenHeight*-5 ,right:screenWidth }}>
         {'\n'}{'\n'} Transaction
        </Text>
        <Image
          style={{width: 50, height: 50,right:screenWidth*-16,borderRadius:20,top:screenHeight*-2}}
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_h6XdSVseJOWxu1rOla3w2c1Mafq1eGJUvDFf2hwuHbBCelySzQ&s'}}
        />
    </TouchableOpacity>

     <TouchableOpacity 
      onPress={() =>  console.log("hi")}
        style={{
          width: screenWidth*45,
          borderRadius: 35,
          backgroundColor: '#40464d', 
          height:screenHeight*25,
marginLeft:screenWidth*3,
        }}>
        <Text style={{ color: 'white', fontWeight: 'bold',textAlign:'center',fontSize:30,top:screenHeight*-5 ,right:screenWidth }}>
          {'\n'}{'\n'}My Account
        </Text>
        <Image
          style={{width: 50, height: 50,right:screenWidth*-16,top:screenHeight*-2}}
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Yn_29CKhLPSVXN0jCppINZNAVRis51hG3eqSbPoYzML6DcjRkw&s'}}
        />
    </TouchableOpacity>
   </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#e1e6ec',
    padding: 8,
  },
});
