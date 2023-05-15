import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";




const Logout =({navigation})=>{

    const [show, setShow] = useState(true)

    const logitout= async()=>{
        try{
            await AsyncStorage.clear()
            navigation.navigate("SignIn")
            console.log("Success")
        }
        catch{
            console.log("error")
        }
        
    }   



    return(
        <View>


        {
            
            show ? Alert.alert('Are you Sure want to Logout', ' kjhgfds',[
                {
                  text: 'Cancel',
             
                     onPress:() => {navigation.goBack()},
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => {logitout}},
              ]) : null
        }
        </View>
    )
}



export default Logout