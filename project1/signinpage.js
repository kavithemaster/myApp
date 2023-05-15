import React from "react";
import Login from "./loginpage";
import Register from "./Registerpage";
import Icon from "react-native-vector-icons/FontAwesome/";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Top=createMaterialTopTabNavigator();
const Signin=()=>{
    return(
          <Top.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, color }) => {
                let iconName;
                if (route.name === "LOGIN") {
                    iconName = 'user-circle';
                    size=focused? 20:10;
                    color=focused?'red':'gray';
                }
                else if (route.name === "SIGN UP") {
                    iconName = 'user-plus';
                    size=focused?20:10;
                    color=focused?'red':'gray';
                }
                return (
                    <Icon
                        name={iconName} 
                        size={size}
                        color={color}
                        />
                )
            }
        })}
           >
            <Top.Screen name="LOGIN" component={Login}/>
            <Top.Screen name="SIGN UP" component={Register}/>
          </Top.Navigator>
    )
}

export default Signin;