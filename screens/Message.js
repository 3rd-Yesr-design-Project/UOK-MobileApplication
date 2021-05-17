import React from 'react';
import {Text, View,StyleSheet,TextInput,TouchableOpacity,Image,FlatList} from 'react-native';


MessageSet=[
  {
    id:"1",
    name:"Praneeth Vithanage",
    notification:2,
    text:"With the establishment of modern universities in Sri Lanka in the 1940s and 1950s, the Vidyalankara Pirivena became the Vidyalankara University in 1959, later the Vidyalankara Campus of the University of Ceylon in 1972, and, ultimately, the University of Kelaniya in 1978.",
    timestamp:"Jan 01 6.30 pm",
    avatar:require("../assets/prane.jpg"),

  },
  {
    id:"2",
    name:"Nethmi Hansika",
    notification:3,
    text:"The University of Kelaniya has pioneered a number of new developments in higher education",
    timestamp:"Jan 01 6.30 pm",
    avatar:require("../assets/user1.jpg"),

  },
  {
    id:"3",
    name:"Himal silva",
    notification:5,
    text:"It was one of the first universities to begin teaching science in Sinhala and the first to restructure the traditional Arts Faculty into three faculties: Humanities, Social Sciences, and Commerce and Management.",
    timestamp:"Jan 01 6.30 pm",
    avatar:require("../assets/user2.jpeg"),

  },
  {
    id:"4",
    name:"Praneeth Vithanage",
    notification:5,
    text:"It has several departments not generally found in the Sri Lankan University system and some Kelaniya innovations have been adopted subsequently by other universities. ",
    timestamp:"Jan 01 6.30 pm",
    avatar:require("../assets/prane.jpg"),

  },
  {
    id:"5",
    name:"Himal silva",
    notification:5,
    text:"It was one of the first universities to begin teaching science in Sinhala and the first to restructure the traditional Arts Faculty into three faculties: Humanities, Social Sciences, and Commerce and Management.",
    timestamp:"Jan 01 6.30 pm",
    avatar:require("../assets/user2.jpeg"),

  },
  {
    id:"6",
    name:"Praneeth Vithanage",
    notification:5,
    text:"It has several departments not generally found in the Sri Lankan University system and some Kelaniya innovations have been adopted subsequently by other universities. ",
    timestamp:"Jan 01 6.30 pm",
    avatar:require("../assets/prane.jpg"),

  },
  {
    id:"7",
    name:"Himal silva",
    notification:5,
    text:"It was one of the first universities to begin teaching science in Sinhala and the first to restructure the traditional Arts Faculty into three faculties: Humanities, Social Sciences, and Commerce and Management.",
    timestamp:"Jan 01 6.30 pm",
    avatar:require("../assets/user2.jpeg"),

  },
  {
    id:"8",
    name:"Praneeth Vithanage",
    notification:5,
    text:"It has several departments not generally found in the Sri Lankan University system and some Kelaniya innovations have been adopted subsequently by other universities. ",
    timestamp:"Jan 01 6.30 pm",
    avatar:require("../assets/prane.jpg"),

  }
];
export default class Messages extends React.Component {

  static navigationOptions ={
    header : null
  }
  

   renderPost = MessageSet =>{
     return(
       <View style={styles.feedItem}>
       <Image source = {MessageSet.avatar} style={styles.avatar}/>
       <View style= {{flex:1}}> 
               <View style ={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
              <View>
               <Text style={styles.notification}> {MessageSet.notification} </Text>
               <Text style={styles.name}>{MessageSet.name}</Text>
               <Text style={styles.timestamp}>{MessageSet.timestamp}</Text>
               <Text style={styles.post} >{MessageSet.text}</Text>
            </View>
         </View>  
       </View>
       </View>
    ); 
   };
  
  render() {
    return (
<View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messenger</Text>
      </View>
       <FlatList
            style={styles.feed}
            data ={MessageSet}
            renderItem={({item}) => this.renderPost(item)}
            keyExtractor = {item => item.id}
            showsVerticalScrollIndicator = {false}
           />
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
  marginHorizontal:8
},
feedItem:{
  backgroundColor:"#FFF",
  borderRadius:10,
  padding:8,
  flexDirection: "row",
  marginVertical:8
},
avatar:{
  width:50,
  height:50,
  marginTop:20,
  borderRadius:25,
  marginRight:16
},
timestamp:{
  fontSize:11,
  color:"#C4C6CE",
  marginTop:4
},
post:{
  marginTop:5,
  fontSize:14,
  color:"#838899",
  maxHeight: 20
  
},
postImage:{
  width:undefined,
  height:150,
  borderRadius:5,
  marginVertical:16
},
notification:{
  backgroundColor: 'green',
  alignSelf: 'flex-end',
  color: 'white',
  fontWeight: 'bold'
},
name:{
  fontSize:19,
}
});

