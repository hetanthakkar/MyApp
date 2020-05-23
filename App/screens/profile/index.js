import * as React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles/styles";
export default class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.dp}
          source={{
            uri:
              "https://scontent-bom1-2.xx.fbcdn.net/v/t1.0-9/p960x960/67810934_221679105462060_1204215830871539712_o.jpg?_nc_cat=100&_nc_sid=dd9801&_nc_ohc=Vzday1GrsdsAX_Rff9T&_nc_ht=scontent-bom1-2.xx&_nc_tp=6&oh=2746a13edf40d8da42115a22afccfc0b&oe=5EE7F0EB",
          }}
        />
        <Text style={styyles.name}>Hetan Thakkar</Text>
        <Text style={styles.tagLine}>An Unsure Programmer</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.location}>Location:</Text>
          <Text style={styles.local}> Bhavnagar,Gujarat</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={styles.about}>About :</Text>
          <Text style={styles.description}>
            I am a softwarer engineer having 5 years of experience in react
            native studying in gmit college.I have great teaching skills and you
            wont be dissapointed
          </Text>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Text style={styles.rate}>Rating:</Text>
            <Text style={styles.rating}> 4/5</Text>
          </View>
        </View>
        <Image
          style={styles.doddle}
          source={{
            uri:
              "https://static.vecteezy.com/system/resources/previews/000/457/353/non_2x/vector-programming-flat-line-design-black-and-white-doodle-style-design-in-blue-banners-and-illustrations-of-business-and-technology-themes.jpg",
          }}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get In Touch</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
