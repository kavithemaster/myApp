import { StyleSheet, StatusBar } from "react-native";
export const Registerstyle= StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: "rgb(250,299,72)",
      justifyContent: "space-between",
    },
    headerContainer: {
      // width: 100,
      // height: 65,
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
      height: "88%",
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
      top: -60,
    },
    welcometext: {
      fontWeight: 700,
      fontSize: 33,
      position: "absolute",
      bottom: 0,
    },
    inputContainer: {
      zIndex: 0,
      width: "80%",
      height: 60,
  
      alignSelf: "center",
      marginTop: 30,
    },
    placeholderText: {
      color: "gray",
      fontSize: 16,
      fontWeight: "bold",
  
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
      marginTop: 60,
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
    radioButtonContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 45,
      // marginTop:10
    },
    radioButton: {
      height: 20,
      width: 20,
      backgroundColor: "white",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "black",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
    },
    radioButtonIcon: {
      height: 14,
      width: 14,
      borderRadius: 11,
      backgroundColor: "grey"
    },
    radioButtonText: {
      fontSize: 16,
      marginLeft: 19
    },
    Text: {
      marginLeft: 42,
      fontWeight: "bold",
      marginTop: 20,
      fontSize: 16,
  
    },
    placeholderText_DOB:{
      color: "gray",
      fontSize: 16,
      fontWeight: "bold",
      zIndex: 0,
      width: "80%",
      // height: 20,
  
      alignSelf: "center",
      marginTop: 30,

    },
    DOB_text:{
      marginRight:20,
      fontSize:16,
      fontWeight:"bold",
      
    }
  
  });