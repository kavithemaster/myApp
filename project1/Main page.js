import React, { useState, useContext } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { SearchBar, ThemeConsumer } from "react-native-elements";
import { Food_Items_Details } from "./Food_Items";
import { Sports_Items } from "./Sports_Items";
import { Fruits_Items_Details } from "./Fruits_Items";
import userContext from "../appContext";

const Main_page = () => {
    const { search, setSearch } = useContext(userContext)
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.Main_page.main_container}>
                        <ScrollView>

                            <SearchBar
                                lightTheme
                                placeholder="Search Here"
                                round
                                containerStyle={theme.Main_page.containerStyle}
                                value={search}
                                onChangeText={e => setSearch(e)}
                                
                            >
                            </SearchBar>

                            <Text style={theme.Main_page.container}>Sports Items</Text>
                            <Sports_Items />
                            <Text style={theme.Main_page.container}>Food </Text>
                            <Food_Items_Details />
                            <Text style={theme.Main_page.container}>Fruits </Text>
                            <Fruits_Items_Details />
                        </ScrollView>


                    </View>
                )
            }
        </ThemeConsumer>

    )
}

export default Main_page