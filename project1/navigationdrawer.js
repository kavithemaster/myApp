import React, { useContext } from "react";
import Contents from "./Contens";
import Tab_Nav from "./Tab_Bottom_Navigator";
import Rich_Editor from "./Rich_Editor";
import Image_Picker from "./Image_Picker";
import Time_Picker from "./Time_picker";
import Help_Support from "./help_Support";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { View, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userContext from "../appContext";
import Call from "./Call";

const Drawer = createDrawerNavigator();

const Navtab = ({ navigation }) => {
    const { setLogin } = useContext(userContext)
    return (
        <Drawer.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: "goldenrod",
                borderBottomWidth: 7,
                borderTopWidth:7,
                borderBottomEndRadius: 30,
                borderTopRightRadius:30,   
                           
            },
            headerTintColor: "white",
            headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 22,
                fontStyle: "italic"
                
            }
        }}

            drawerContent={props => {
                return (
                    <DrawerContentScrollView>
                        <View>
                            <DrawerItemList {...props}

                            />
                        </View>
                        <View>
                            <DrawerItem
                                icon={() => <Icon name="logout" size={20} />}
                                name="Logout"
                                label={'Logout'}
                                onPress={() => {
                                    Alert.alert('Alert', 'Are you Sure want to Logout ', [
                                        {
                                            text: 'No',
                                            onPress: () => { navigation.navigate("NavTab") },

                                        },
                                        {
                                            text: 'Yes',
                                            onPress: async () => {
                                                await AsyncStorage.clear()
                                                navigation.navigate("SignIn")
                                                setLogin(false)
                                            }
                                        },

                                    ])
                                }}
                            />
                        </View>
                    </DrawerContentScrollView>
                )
            }}
        >
            <Drawer.Screen
                name="contens"
                component={Contents} options={{
                    title: 'Welcome',
                    drawerIcon: () => (
                        <Icon name="arrow-right-bottom-bold" size={20} />
                    )
                    
                }} />
            <Drawer.Screen
                name='Products'
                component={Tab_Nav}
                options={{
                    title: 'Buy the Products',
                    drawerIcon: () => (
                        <Icon name="purse-outline"
                            size={20} />
                    )
                }}
            />
            <Drawer.Screen
                    name="For enquiries"
                    component={Rich_Editor}
                    onPress={() =>navigation.navigate('Rich_Editor') }
                    options={{header:()=>null,
                    drawerIcon:({focused , size,color})=>(
                        <Icon name="comment-question-outline" 
                        size={20}/> )               
                }}                   
                   />               
            <Drawer.Screen
                    name="Profile"
                    component={Image_Picker}
                    onPress={() =>navigation.navigate('Image_Picker') }
                    options={{header:()=>null,
                    drawerIcon:({focused , size,color})=>(
                        <Icon name="image-edit" 
                        size={20}/> )               
                }}                   
                   />               
            <Drawer.Screen
                    name="Time Picker"
                    component={Time_Picker}
                    onPress={() =>navigation.navigate('Time_picker') }
                    options={{header:()=>null,
                    drawerIcon:({focused , size,color})=>(
                        <Icon name="calendar-month" 
                        size={20}/> )               
                }}                   
                   />               
            <Drawer.Screen
                    name="Help Support"
                    component={Help_Support}
                    onPress={() =>navigation.navigate('Help_Support') }
                    options={{header:()=>null,
                    drawerIcon:({focused , size,color})=>(
                        <Icon name="help-circle-outline" 
                        size={20}/> )               
                }}                   
                   />  
                   <Drawer.Screen
                    name="Complain"
                    component={Call}
                    onPress={() =>navigation.navigate('Call') }
                    options={{header:()=>null,
                    drawerIcon:({focused , size,color})=>(
                        <Feather name="phone-call" 
                        size={20}/> )               
                }}                 
                   />             
        </Drawer.Navigator>
    )

}

export default Navtab;
