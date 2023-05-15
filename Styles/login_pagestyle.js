import {  StyleSheet, StatusBar} from "react-native";
export const login_style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgb(250,206,72)",
      justifyContent: "space-between",
    },
    headerContainer: {
      width: "100%",
      height: 35,
      marginTop: StatusBar.currentHeight,
      justifyContent: 'space-between',
      flexDirection: "row",
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    headingStyle: {
      fontSize: 20,
      fontWeight: "bold",
      marginLeft: 10,
      
  
    },
    backButtonContainer: {
      flexDirection: "row",
  
    },
    mainContainer: {
      width: "100%",
      height: "90%",
      backgroundColor: "white",
      borderTopLeftRadius: 60,
      borderTopRightRadius: 60,
  
    },
    welcomeHeading: {
      width: "100%",
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
      height: 100,
  
  
    },
    profile: {
      width: "100%",
      height: "100%",
  
    },
    circle: {
      width: 90,
      height: 90,
      borderWidth: 5,
      borderColor: "lightblue",
      borderRadius: 50,
      overflow: "hidden",
      backgroundColor: "white",
      position: "absolute",
      top: -50,
    },
    welcometext: {
      fontWeight: 700,
      fontSize: 33,
      position: "absolute",
      bottom: 0,
    },
    inputContainer: {
      width: "80%",
      height: 60,
  
      alignSelf: "center",
      marginTop: 30,
    },
    placeholderText: {
      color: "gray",
      fontSize: 16,
      fontWeight:"bold",
  
    },
    textInputStyle: {
      width: "100%",
      height: 40,
      borderBottomWidth: 2,
      borderBottomColor: "rgb(250,206,72)",
    },
    button: {
      width: "80%",
      height: 40,
      backgroundColor: "rgb(250,206,72)",
      marginTop: 10,
      alignSelf: "center",
      alignItems: "center",
      paddingTop: 6,
    },
    detailsstyle: {
      marginLeft: 200,
      marginTop: 8,
      fontSize: 25,
      fontWeight: "bold",
    },
    registerStyle:{
      color:"black",
      width:"100%",
      height:"50%",
      // backgroundColor:"red",
      marginTop:30,
      paddingLeft:160,
      fontSize:20,
    }
  
  });