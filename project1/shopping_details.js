import React, { useEffect, useState, useContext } from "react";
import { Modal, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { Avatar, Text, ThemeConsumer } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Shopping_details = ({ route, navigation }) => {

    const [visible, setVisible] = useState(false)
    const [modalvisible, setModalVisible] = useState(false)

    const item = route.params
    const [data, setData] = useState(item)

    const close = () => {
        setModalVisible(true)
        setTimeout(() => {
            setModalVisible(false)
        }, 2000);
    }
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.Shoppingdetails_style.maincontainer}>

                        <View style={theme.Shoppingdetails_style.icon_style}>
                            <Icon name="arrow-left" size={30} onPress={() => navigation.goBack()} />
                        </View>

                        <Text style={theme.Shoppingdetails_style.text_style}>{item.name}</Text>
                        <Text style={theme.Shoppingdetails_style.textcontent_style}>{item.content}</Text>

                        {/* <TouchableOpacity > */}
                        <Text style={theme.Shoppingdetails_style.touchable_opacity}>Buy Now</Text>
                        <Text style={theme.Shoppingdetails_style.textamount_style}> Total amount: {item.amount * item.count}</Text>
                        {/* </TouchableOpacity> */}

                        <View style={theme.Shoppingdetails_style.count_conatiner}>
                            <Icon name="plus-circle-outline" size={40} style={theme.Shoppingdetails_style.plus_icon} onPress={() => { setData(item.count += 1) }}></Icon>
                            <Text style={theme.Shoppingdetails_style.count_style}>{item.count}</Text>
                            <Icon name="minus-thick" size={40} style={theme.Shoppingdetails_style.minus_icon} onPress={() => { if (item.count > 1) { setData(item.count -= 1) } }} ></Icon>
                        </View>


                        <View>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={visible}
                            >
                                <View style={theme.Shoppingdetails_style.modal_container}>
                                    <TouchableOpacity style={{ alignSelf: "center" }}>
                                        <Icon name="close-octagon-outline" size={30} style={{ marginLeft: 290, marginTop: 18 }} onPress={() => navigation.goBack()}></Icon>
                                        <Text style={theme.Shoppingdetails_style.product_text}>Your Product: {item.name}</Text>
                                        <Image source={require('../assets/click.gif')} ></Image>
                                        <Text style={theme.Shoppingdetails_style.orderIt_text} onPress={() => close()}>Order it</Text>
                                    </TouchableOpacity>
                                </View>
                            </Modal>
                        </View>


                        <View>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalvisible}
                            >
                                <View style={theme.Shoppingdetails_style.modal_container1}>
                                    <TouchableOpacity style={{ alignSelf: "center", marginTop: 150 }}>
                                        <Avatar rounded source={require('../assets/success.gif')} size={200} />
                                        <Text style={{ fontSize: 20, fontStyle: "italic", fontWeight: "bold" }}>Ordered Successfully</Text>
                                    </TouchableOpacity>

                                </View>
                            </Modal>
                        </View>



                        <View style={theme.Shoppingdetails_style.avatar_style}>
                            <Avatar size={50} rounded source={require("../assets/gpay.jpg")} onPress={() => setVisible(true)} />
                            <Avatar size={50} rounded source={require("../assets/phonepay.jpg")} onPress={() => setVisible(true)} />
                            <Avatar size={50} rounded source={require("../assets/paytm.jpg")} onPress={() => setVisible(true)} />
                        </View>


                    </View>
                )
            }
        </ThemeConsumer>

    )
}

export default Shopping_details;