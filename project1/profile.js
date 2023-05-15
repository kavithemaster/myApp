import React from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import userContext from "../appContext";
import { useContext } from "react";
import Rating_Page from "./Rating";
import { Avatar, ThemeConsumer } from "react-native-elements";

const Profile = (navigation) => {   

    const { uName, setuName, cart, source } = useContext(userContext)
    const data = source
    console.log(data == source)
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.profile_style.container}>
                        <Avatar rounded
                            source={{ uri: `data:image/jpeg;base64,${data}` }}
                            style={theme.profile_style.avatar_style}
                        />
                        <ScrollView>
                            <View>

                            </View>
                            <Text style={theme.profile_style.text}>{uName}</Text>

                            <Text style={theme.profile_style.carts_text}>Your carts</Text>

                            <View style={theme.profile_style.container}>

                                {cart.map(item => {
                                    return (
                                        <View key={item.id}>
                                            <ImageBackground source={item.req} style={theme.profile_style.imagestyle} onPress={() => navigation.navigate('Shopping-details', item)}>
                                                <View >
                                                    <Text style={theme.profile_style.itemName}>{item.name}</Text>
                                                </View>
                                                {/* <Text style={theme.profile_style.count_style}> {item.count}</Text> */}
                                                <View style={theme.profile_style.rating}>
                                                <Rating_Page/>
                                                </View>
                                            </ImageBackground>
            
                                        </View>
                                    )
                                })}
                            </View>
                        </ScrollView>
                    </View>
                )
            }
        </ThemeConsumer>

    )
}

export default Profile;
