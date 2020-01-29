import React from 'react'
import { Dimensions,View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import firebase from 'firebase';

const screenWidth = Math.round(Dimensions.get('window').width)/100;
const screenHeight = Math.round(Dimensions.get('window').height)/100;

class Login extends React.Component {


    
    componentDidMount(){
        var firebaseConfig = {
          apiKey: "AIzaSyAfGN94rWhA55dceve-ab5R5nEL6o4xXeg",
          authDomain: "new1-930be.firebaseapp.com",
          databaseURL: "https://new1-930be.firebaseio.com",
          projectId: "new1-930be",
          storageBucket: "new1-930be.appspot.com",
          messagingSenderId: "332990256430",
          appId: "1:332990256430:web:640a6413492c34bf2a96bf",
          measurementId: "G-SBPS6449GM"
          };
           this.setState({fname:"",flag:1});
      
        if (!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
          }
          
      }
      
    state = {
        email: '',
        password: ''
    }
    handleLogin = () => {
        const { email, password } = this.state

        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => console.log("success"))
            .catch(error => console.log(error))
    }
    render() {
        return (
            <View style={styles.container}>
               <Text>{'\n'}{'\n'}{'\n'}{'\n'}</Text>
                <TextInput
                    style={styles.inputBox}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder='Email'
                    placeholderTextColor='white'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    placeholder='Password'
                    placeholderTextColor='white'
                    secureTextEntry={true}
                />
                        <Text>{'\n'}</Text>

                 <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <Text></Text>

                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                <Text style={styles.loginText}>LOGIN</Text>
                 </TouchableOpacity> 
                 <Text></Text>

                <TouchableOpacity  onPress={this.handleLogin}>
                <Text style={styles.signupText}>SignUp</Text>
                     </TouchableOpacity>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center'
    },
    forgot:{
        color:"white",
        fontSize:14
      },
      loginText:{
        color:"white",
    fontWeight:'bold',
        fontSize:16
      },
    
      signupText:{
        color:"white",
        fontSize:20,
        fontWeight:'bold',
      },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center',
        color:'white',
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: '#F85C5E',
        borderColor: '#F6820D',
        borderRadius: 25,
        width:screenWidth*80,
        height:screenHeight*8,
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    }
})

export default Login
