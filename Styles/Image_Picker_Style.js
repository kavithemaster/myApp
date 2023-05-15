import {StyleSheet} from 'react-native'
 export const Image_Picker_styles = StyleSheet.create(
    {
        maincontainer:{
            backgroundColor: "white", 
            width: '80%', 
            height: "45%", 
            alignSelf: "center",
             borderRadius: 30,
              marginTop: 60, 
            borderWidth: 2 ,
        },
        container: {
            alignSelf: "center",
            width: "40%",
            height: "6%",
            backgroundColor: "rgb(250,269,72)",
            marginTop: 270,
            borderRadius: 50,
            borderWidth: 3,
            borderTopColor: "red",
            borderBottomColor: "red",

        },
        headingstyle: {
            fontSize: 25,
            fontWeight: "bold",
            alignSelf: "center",
            marginTop: 20,
        },
        camera_icon: {
            position: "absolute",
            marginLeft: 30,
            marginTop: 6,
        },
        gallery_icon: {
            position: "absolute",
            marginLeft: 100,
            marginTop: 6,
        },
        image_style: {
            width: 150,
            height: 150,
            alignSelf: "center",
            position: "absolute",
            marginTop: 150,
        },
        ok_button:{
            marginTop:340,
            width:90,
            // height:70,
            alignSelf:"center",
            fontSize:30,
            backgroundColor:"yellow",
            textAlign:"center",
            borderTopLeftRadius:20,
            borderBottomRightRadius:20,
            borderWidth:2,
        },
        person_icon:{
            alignSelf: "center",
            borderWidth:2 ,
            marginTop:10,
        }


    }
)