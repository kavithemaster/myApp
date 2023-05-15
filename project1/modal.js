import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from 'react-native';
import { Avatar, ThemeConsumer } from 'react-native-elements';

const Modal_page = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.modal_style.Main_Container}>
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={modalVisible}
                        >
                            <View style={theme.modal_style.Main_Container}>
                                <View style={theme.modal_style.modalView}>
                                    <Text style={theme.modal_style.modalText}>A mobile shopping app is an application that allows customers to browse and buy products or services from a retailer or service provider. Shopping apps can significantly impact businesses as mobile traffic continues to grow at an alarming rate. In fact, the majority of transactions now take place within shopping apps rather than on traditional websites.</Text>
                                    <Pressable
                                        style={[theme.modal_style.button, theme.modal_style.buttonClose]}
                                        onPress={() => setModalVisible(false)}
                                    >
                                        <Text style={theme.modal_style.textStyle}>Thanks for Visiting</Text>
                                    </Pressable>
                                </View>
                            </View>

                        </Modal>
                        <Pressable
                            style={theme.modal_style.about_us_text}
                        >
                            <Text style={theme.modal_style.textStyle}>About Us</Text>
                        </Pressable>

                        <Pressable
                            style={[theme.modal_style.button, theme.modal_style.image]}
                            onPress={() => setModalVisible(true)}>
                            <Text style={theme.modal_style.textStyle1}>Click Here</Text>
                            <Avatar rounded source={require("../assets/splash.jpg")} size={350}></Avatar>
                        </Pressable>
                        <View>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={theme.modal_style.back_text}>Back </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        </ThemeConsumer>

    )
}

export default Modal_page;






