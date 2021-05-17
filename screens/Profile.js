import React from 'react';
import {  View,
   Text,
   Image,
   TouchableOpacity,
   StyleSheet,
   ScrollView,
   SafeAreaView,
   FlatList} from 'react-native';
   
   import Login from './Loging'
   
export default class Profile extends React.Component {
  static navigationOptions ={
    header : null
  }
   
  handleLogin = () => {
    const {email,password} = this.state
}

postSet=[
  {
    id:"1",
    name:"Praneeth Vithanage",
    text:"With the establishment of modern universities in Sri Lanka in the 1940s and 1950s, the Vidyalankara Pirivena became the Vidyalankara University in 1959, later the Vidyalankara Campus of the University of Ceylon in 1972, and, ultimately, the University of Kelaniya in 1978.",
    timestamp:212212121212,
    avatar:require("../assets/prane.jpg"),
    image:require("../assets/campus.jpg")

  },
  {
    id:"2",
    name:"Nethmi Hansika",
    text:"The University of Kelaniya has pioneered a number of new developments in higher education",
    timestamp:212212121212,
    avatar:require("../assets/user1.jpg"),
    image:require("../assets/campus2.jpg")

  },
  {
    id:"3",
    name:"Himal silva",
    text:"It was one of the first universities to begin teaching science in Sinhala and the first to restructure the traditional Arts Faculty into three faculties: Humanities, Social Sciences, and Commerce and Management.",
    timestamp:212212121212,
    avatar:require("../assets/user2.jpeg"),
    image:require("../assets/campus3.png")

  },
  {
    id:"4",
    name:"Praneeth Vithanage",
    text:"It has several departments not generally found in the Sri Lankan University system and some Kelaniya innovations have been adopted subsequently by other universities. ",
    timestamp:212212121212,
    avatar:require("../assets/prane.jpg"),
    image:require("../assets/campus4.jpg")

  },
  {
    id:"5",
    name:"Praneeth Vithanage",
    text:"These include the Departments of Industrial Management and Microbiology in the Faculty of Science; Departments of Linguistics, Fine Arts, Modern Languages and Hindi in the Faculty of Humanities; and Mass Communication and Library and Information Sciences in the Faculty of Social Sciences.",
    timestamp:212212121212,
    avatar:require("../assets/prane.jpg"),
    image:require("../assets/campus5.jpg")

  }

];

renderPost = postSet =>{
  return(

    <View style={styles.feedItem}>
    <Image source = {postSet.avatar} style={styles.avatar}/>
    <View style= {{flex:1}}> 
          <View style ={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
          <View>
            <Text style={styles.name}>{postSet.name}</Text>
            <Text style={styles.timestamp}>{postSet.timestamp}</Text>
         </View>
            </View>
            <Text style={styles.post}>{postSet.text}</Text>
            <Image source={postSet.image} style={styles.postImage} resizeMode = "cover"></Image>

    </View>

    </View>

 );
  
};


render() {
return (

<View style={styles.container_post}>

<View style={styles.header}>
    <Text style={styles.headerTitle}>Profile</Text>
  </View>

<SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <View style={styles.container}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        showsVerticalScrollIndicator={false} > 
        <View style={styles.imageWrapper}>
        <Image
          style={styles.userImg}
          source={require("../assets/prane.jpg")}
        ></Image>
        </View>
        
        <Text style={styles.userName}>Praneeth Vithanage</Text>
        
        {/* <Text>{route.params ? route.params.userId : user.uid}</Text> */}
        <Text style={styles.aboutUser}>
        
        Experienced Oracle Functional Consultant with a demonstrated history of working in the computer software industry. Skilled in Oracle Financials, 
        </Text>
        <View style={styles.userBtnWrapper}>
            <>
              <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
                <Text style={styles.userBtnTxt}>Message</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
                <Text style={styles.userBtnTxt}>Follow</Text>
              </TouchableOpacity>
            </>
            <>
              <TouchableOpacity
                style={styles.userBtn}
                onPress={() => {
                  navigation.navigate('EditProfile');
                }}>
                <Text style={styles.userBtnTxt}>Edit</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.userBtn} onPress={() => this.props.navigation.navigate("Login")}>
                <Text style={styles.userBtnTxt}>Logout</Text>
              </TouchableOpacity>
            </>
        </View>
        <View style={styles.userInfoWrapper}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>10,000</Text>
            <Text style={styles.userInfoSubTitle}>Posts</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>10,000</Text>
            <Text style={styles.userInfoSubTitle}>Followers</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>100</Text>
            <Text style={styles.userInfoSubTitle}>Following</Text>
          </View>
        </View>
        </View>
        <View style={styles.container_post}>
       <FlatList
      style={styles.feed}
      data ={postSet}
      renderItem={({item}) => this.renderPost(item)}
      keyExtractor = {item => item.id}
      showsVerticalScrollIndicator = {false}
       />
       </View>
      </ScrollView>

  
    </SafeAreaView>  

   </View>

   
 
 
);
}
}
const styles = StyleSheet.create({

container: {
  flex: 1,
  backgroundColor: '#fff',
  padding: 20,
 },

 container_post: {
  flex: 1,
  backgroundColor:"#dcdcdc",
 
 },
 userImg: {
  height: 150,
  width: 150,
  borderRadius: 75,
 },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },

  imageWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },

  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  userBtn: {
    borderColor: '#2e64e5',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: '#2e64e5',
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: 'center',
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
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
},
header:{
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
headerTitle:{
fontSize:20,
fontWeight:'500'
},
feed:{
  marginHorizontal:16
},
feedItem:{
  backgroundColor:"#FFF",
  borderRadius:5,
  padding:8,
  flexDirection: "row",
  marginVertical:8
},
avatar:{
  width:36,
  height:36,
  borderRadius:18,
  marginRight:16
},

timestamp:{
  fontSize:11,
  color:"#C4C6CE",
  marginTop:4
},
post:{
  marginTop:16,
  fontSize:14,
  color:"#838899",

},
postImage:{
  width:undefined,
  height:150,
  borderRadius:5,
  marginVertical:16
}

 
  
});