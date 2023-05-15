import { StyleSheet } from "react-native";
export const Shoppingdetails_style = StyleSheet.create({
    maincontainer: {
        backgroundColor: "lightblue",
        height: "100%",
        width: "100%"
    },

    text_style: {
        fontSize: 60,
        alignSelf: "center",
        marginTop: 1,
        color: "red",
        fontStyle: "italic",
    },
    touchable_opacity: {
        fontSize: 40,
        marginTop: 40,
        borderRadius: 100,
        alignSelf: "center",
    },
    avatar_style: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 40,
    },
    textcontent_style: {
        fontSize: 20,
        width: 290,
        alignSelf: "center",
        fontStyle: "italic",
    },
    icon_style: {
        marginTop: 40,
        marginLeft: 20,
    },
    textamount_style: {
        fontSize: 30,
        width: "100%",
        alignSelf: "center",
        fontWeight: "bold",
        marginTop: 20,
        marginLeft: 140,
    },
    plus_icon: {
           marginLeft:75,
           color:"red",
           
    },
    minus_icon: {
     marginLeft:10,
     position:"absolute",
     marginTop:2,
     color:"red",
    },
    count_style:{
        marginLeft:55,
        fontSize:24,
        position:"absolute",
        marginTop:2,
        color:"red",
    
    },
    count_conatiner:{
        width: 130, 
        height: 40,
         alignSelf: "center", 
         borderRadius: 20,
          marginTop: 20, 
    },
    orderIt_text:{
        fontSize: 30, 
        fontStyle: "italic", 
        fontWeight: "bold", 
        marginLeft: 180, 
        marginTop: 20, 
        backgroundColor: "rgb(250,206,72)", 
        borderRadius: 30,
         padding: 6, 
        alignSelf: "center" ,
    },
    product_text:{
        fontSize: 30, 
        fontStyle: "italic",
         fontWeight: "bold" ,
    },
    modal_container:{
      alignSelf: "center", 
      marginTop: 200, 
      backgroundColor: "white", 
      borderRadius: 70,
       width: "100%",
        height: "50%", 
      borderWidth: 3 ,  
    },
    modal_container1:{
        backgroundColor: "rgb(250,206,72)", 
        width: "80%",
         height: "80%", 
         alignSelf: "center", 
         marginTop: 90, 
         borderRadius: 30,
         borderWidth: 3 ,
    },
    
})


// export default Shoppingdetails_style;