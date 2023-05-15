import { StyleSheet } from "react-native";

export const Call_styles = StyleSheet.create({
    text: {
      fontSize: 30,
      width: "90%",
      alignSelf: "center",
      marginTop: 40,
      backgroundColor: "white",
      borderWidth: 2,
      borderBottomRightRadius: 40,
      borderRadius: 10,
      paddingLeft: 10,
      color: "black",
      fontStyle: "italic",
      fontWeight: "bold",
    },
    arrow_left:{
      marginTop: 60,
       marginLeft: 20 ,
    },
    main_Container:{
      backgroundColor: "rgb(250,209,72)", 
      flex: 1,
    },
    arrow_down:{
      marginBottom: 50, 
      alignSelf: "center", 
      color: "red" ,
    },
    container:{
      alignSelf: "center", 
      marginTop: 50, 
    }
  
  })