import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  LayoutAnimation
} from "react-native";
import axios from 'axios';

export default class Register extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    usertype:"",
    errorMessage: null
  };

  static navigationOptions = {
 header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome</Text>
       </View>
        <StatusBar barStyle="light-content"></StatusBar>

        <Image
          source={require("../assets/coverr.jpg")}
          style={{ position: "absolute", marginTop: -10 }}
        ></Image>

        <TouchableOpacity>
          <Image
            source={require("../assets/propic.jpg")}
            style={{ marginTop: 30, position: "absolute", alignSelf: "center" }}
          ></Image>
        </TouchableOpacity>

        <Text style={styles.greeting}>{"Hello \n Sing Up to get start."}</Text>

        {/* <View style={styles.errorMessage}>
          <Text style>{"Error"}</Text>
        </View> */}

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Full Name </Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
            ></TextInput>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.inputTitle}>User Type </Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={usertype => this.setState({ usertype })}
              value={this.state.usertype}
            ></TextInput>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.inputTitle}>Email Address </Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            ></TextInput>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            ></TextInput>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={this.Register}
        >
          <Text style={{ color: "#FFF", fontWeight: "500" }}>Sing Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignSelf: "center", marginTop: 32 }}
          onPress={() => this.props.navigation.navigate("WelCome")}
        >
          <Text style={{ color: "#414959", fontSize: 13 }}>
            {" "}
            New to Social App ?
            <Text style={{ color: "#E9446A", fontWeight: "500" }}> Login </Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  constructor(props) {
    super(props);
    this.state = { username:"",email:"",password:"",usertype:""};
  }
  Register= async () => {
  
    try {
      const res = await axios.post("http://192.168.8.100:5000/api/v1/user", {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        usertype: this.state.usertype
      });
      this.props.navigation.navigate("Loging")
    } catch (err) {
      console.log(err.message);
      alert(err.message);
    }
  };
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  greeting: {
    marginTop: 172,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center"
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center"
  },
  form: {
    marginBottom: 18,
    marginHorizontal: 30
  },

  inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase"
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D"
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    height: 30
  },header:{
    paddingTop:48,
    paddingBottom:16,
    backgroundColor:"#FFF",
    alignItems:"center",
    justifyContent:"center",
    borderBottomWidth:1,
    borderBottomColor:"#EBECF4",
    shadowColor:"#454D65",
    shadowOffset:{height:5},
    shadowRadius:15,
    shadowOpacity:0.2,
    zIndex:10
  },
});
