
import * as React from 'react';
import { Dimensions,TextInput,TouchableOpacity,Text, View, StyleSheet,YellowBox } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { Picker } from 'react-native-picker-dropdown';
import firebase from 'firebase';
import _ from 'lodash';
YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
var fetch_name="initial"
var radio_props = [
  {label: 'Male    ', value:"Male" },
  {label: 'Female', value:"Female"}
];
var cid =1
const screenWidth = Math.round(Dimensions.get('window').width)/100;
const screenHeight = Math.round(Dimensions.get('window').height)/100;
export default class App extends React.Component {
  
  getCities =  ()=>{
  if(this.state.state=="Gujarat")
   return ["Enter City","Ahmedabad","Anand","Bhavnagar","Gandhinagar","Jamnagar","Rajkot","Surat","Vadodara"].map(citi => <Picker.Item label={citi} value={citi} />)
   if(this.state.state=="Maharashtra")
   return ["Enter City,Akola","Kalyan","Mumbai","Navi Mumbai","Panvel","Pune"].map(citi => <Picker.Item label={citi} value={citi} />)
   if(this.state.state=="Chhattisgarh")
    return ["Enter City","Raipur","Bilaspur","Bastar","Jashpur","Durg","Koriya"].map(citi => <Picker.Item label={citi} value={citi} />)
    if(this.state.state==="Jharkhand")
    return ["Enter City","Ranchi","Bokaro","Deoghar","Dhanbad","Dumka","Ghatshila","Hazaribagh","Jamshedpur"].map(citi => <Picker.Item label={citi} value={citi} />)
    if(this.state.state=="Kerala")  
    return ["Enter City","Kochi"].map(citi => <Picker.Item label={citi} value={citi} />)
    if(this.state.state=="Madhya Pradesh")  
    return ["Enter City","Bhopal","Indore","Gwalior","Jabalpur","Sagar","Ujjain "].map(citi => <Picker.Item label={citi} value={citi} />)
    if(this.state.state=="Karnataka")  
    return ["Enter City","Mangalore","Bangalore","Mysore","Bijapur"].map(citi => <Picker.Item label={citi} value={citi} />)
    if(this.state.state=="Rajasthan")  
    return ["Enter City","Kota","Udaipur","Jaipur","Jodhpur","Sikar","Ajmer"].map(citi => <Picker.Item label={citi} value={citi} />)
     if(this.state.state=="Tamil Nadu")  
    return ["Enter City","Coimbatore","Salem","Madurai","Tiruchirapalli"].map(citi => <Picker.Item label={citi} value={citi}/>)
    if(this.state.state=="Uttar Pradesh")  
    return ["Enter City","Kanpur","Lucknow","Ghaziabad","Agra","Varanasi","Prayagraj"].map(citi => <Picker.Item label={citi} value={citi} />)
    if(this.state.state=="Delhi")  
    return ["Enter City","Delhi NCR"].map(citi => <Picker.Item label={citi} value={citi} />)
    if(this.state.state=="")  
    return  <Picker.Item label="Enter City" value="" />
}
  submit=async () =>{
  const {fname,email,password,state,number} = this.state;
    var tempo=cid
 
  if(fname==""){
    this.setState({Error: 'Please enter your name'});
  }
  if(number.length!=10){
    this.setState({Error: 'Phone number should be of 10 digits'});
  }
 
   if(email==""){
      this.setState({Error: 'Please enter your Email'});
  }   
   if(password==""){
    this.setState({Error: 'please fill the password'});
  }
   if(password.length <5){
    this.setState({Error: 'Password  must be more than 5'});
  }
 if(state==""){
    this.setState({Error: 'Please enter your state'});
  }
  for(let k=1;k<=tempo;k++){ 
    
    
    console.log("entered for loop")
    firebase.database().ref('user/'+k).on('value',  (snapshot) => {
 fetch_name = snapshot.val().name;
 fetch_email=snapshot.val().email;
console.log("fetch name is "+snapshot.val().name)
console.log("state name is "+this.state.fname)
if(fetch_name==this.state.fname){
 console.log("entered if")
console.log("fetch name is "+fetch_name)
console.log("state name is "+this.state.fname)
this.setState({seen:1})
this.setState({Error: 'Email id /username already exists'})
}
else{
 this.setState({seen:0})
}
console.log("error is "+this.state.error)
})}
 if(this.state.error==""){
   var em=this.state.email
   var ps= this.state.password
  firebase.auth()
  .createUserWithEmailAndPassword(em,ps)
  .then(() => console.log("success"))
  .catch(error => console.log(error))

   console.log("entered second if")
 firebase.database().ref('user/'+cid).set(
    {
      number:this.state.number,
      name: this.state.fname,
      email: this.state.email,
      password: this.state.password,
      state: this.state.state,
      city: this.state.citi,
      gender: this.state.gender
    }
  )  
 this.setState({flag:0})
 cid++;
 this.setState({Error: 'Form Submitted succesfully'});
console.log("about to exit")
}
console.log("exited finally")

}
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

constructor (props) {
    super(props);
    this.state = {  fname:'',gender:'',seen:0,
      email:'', password:'', state: '',citi:'',flag:0 ,error:"",number:0};
  }
  handleValueChange=(state) =>{
    this.setState({ state })
    this.setState({ citi:""})  
    console.log(this.state.state)
  }
  handleCityChange=(state) =>{
    this.setState({ citi})  
    console.log(this.state.citi)
  }
    updateciti=(value)=>{
      console.log("enters")
      this.setState({citi:value})
    }  
  render () { 
    return (
      <View style={styles.container}>

      <Text>{'\n'}{'\n'}{'\n'}{'\n'}</Text>
      <Text style={{color:'red', textAlign:'center'}}>
      {this.state.number}
      </Text>
      <Text></Text>
      <TextInput
      placeholder="Name"
      style={styles.myText}
      onChangeText={
        fname => this.setState({fname})
      }
      />
      <TextInput
      placeholder="Email Id"
      style={styles.myText}
      onChangeText={
        email => this.setState({email})
      }
      />

      <TextInput
      placeholder="Password"
      style={styles.myText}
      secureTextEntry={true}  
      onChangeText={
        password => this.setState({password})
      }
      />
      <TextInput
      placeholder="Re-enter Password"
      style={styles.myText}
      secureTextEntry={true}  
      onChangeText={
        password => {this.setState({password})
        }
      }
      />


      <RadioForm
      style={styles.button}
      buttonSize={15}
      formHorizontal={true}
      labelHorizontal={true}
      radio_props={radio_props}
      initial={-1}
      onPress={(value) => {this.setState({gender:value})}}
        />
         
         <Picker
          selectedValue={this.state.state}
          onValueChange={this.handleValueChange}
          mode="dialog"
          textStyle={styles.pickerText}
        >
          <Picker.Item label="Enter State" value="" />
          <Picker.Item label="Delhi" value="Delhi" />
          <Picker.Item label="Chhattisgarh" value="Chhattisgarh" />
          <Picker.Item label="Goa" value="Goa" />
          <Picker.Item label="Gujarat" value="Gujarat" />
          <Picker.Item label="Haryana" value="Haryana" />
          <Picker.Item label="Jharkhand" value="Jharkhand" />
          <Picker.Item label="Karnataka" value="Karnataka" />
          <Picker.Item label="Kerala" value="Kerala" />
          <Picker.Item label="Madhya Pradesh" value="Madhya Pradesh" />
          <Picker.Item label="Maharashtra" value="Maharashtra" />
          <Picker.Item label="Punjab" value="Punjab" />
          <Picker.Item label="Rajasthan" value="Rajasthan" />
          <Picker.Item label="Tamil Nadu" value="Tamil Nadu" />
          <Picker.Item label="Uttar Pradesh" value="Uttar Pradesh" />
        </Picker>

        <Picker
onValueChange={(itemValue) =>
    this.updateciti(itemValue)
  }          
  selectedValue={this.state.citi}
          mode="dialog"
          textStyle={styles.pickerText}
        >
        { this.getCities() }
          </Picker>
       
      <Text></Text>
    <TouchableOpacity 
      onPress={() => this.submit()}
        style={{
          width: '40%',
          borderRadius: 8,
          backgroundColor: 'red', 
          left:screenWidth/49,
          top:screenHeight*0.08,
          height:'8%',
        }}>
        
        <Text style={{ color: 'white', fontWeight: 'bold',textAlign:'center',fontSize:30,textAlignVertical: "center" }}>
          Submit
        </Text>
    </TouchableOpacity>     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pickerText:{
    width:screenWidth*100, 
  },
  button:{
    left:screenWidth*-28,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1e6ec',
  },
  myText:{
    borderWidth:1.2,borderColor:'#d6d0cf',
    margin:10, padding:10, width:'95%'
  },
  
});
