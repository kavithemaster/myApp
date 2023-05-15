import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Empty from "./Main page";
import Profile from "./profile";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab=createBottomTabNavigator();
const Tab_Nav = ({ navigation}) => {
    // const {Itemname}=route.params;
    return (
        
           <Tab.Navigator
           screenOptions={({ route}) => ({
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => {
                let iconName;              
                if (route.name === "Empty") {
                    iconName = 'shopping-cart';
                    size=focused?25:20;
                    color=focused?'red':'gray';
                }
                else if (route.name === "Profile") {
                    iconName = 'user-secret';
                    size=focused?25:20;
                    color=focused?'red':'gray';
                    tabBarIcon="plus"
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
            {/* <Tab.Screen name="Update Your Details" component={Drop_Down} /> */}
            <Tab.Screen name="Empty" component={Empty}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>

    )
    
};


export default Tab_Nav;
