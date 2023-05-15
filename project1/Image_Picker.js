import { ImageBackground, Modal, } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { PermissionsAndroid, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import userContext from "../appContext";
import { ThemeConsumer } from "react-native-elements";

const Image_Picker = props = ({ navigation }) => {
    const [cameraPhoto, setCameraPhoto] = useState()
    const [galleryPhoto, setGalleryPhoto] = useState()
    const [visible, setVisible] = useState(false)

    const { setSource, source } = useContext(userContext)

    let options = {
        saveToPhotos: true,
        mediaType: 'photo',
    }

    const setImage = (uri) => {
        console.log(uri)
        RNFS.readFile(uri, 'base64')
            .then(res => {
                  console.log(res);
                setSource(res)
            })
            .catch(err => { console.log("err", err) })
    }

    const openCamera = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
        )

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            const result = await launchCamera(options)
            console.log(result);
            setCameraPhoto(result.assets[0].uri)
            setImage(result.assets[0].uri)
        }
    }

    const openGallery = async () => {
        const result = await launchImageLibrary(options)
        setGalleryPhoto(result.assets[0].uri)
        setImage(result.assets[0].uri)
    }


    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View >
                        <View>
                            <Icon name="arrow-left" size={30} style={{marginTop:24,marginLeft:16}} onPress={()=> navigation.goBack()}></Icon>
                        </View>

                        <View style={theme.Image_Picker_styles.maincontainer}>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={visible}
                            >
                                <View style={theme.Image_Picker_styles.container}>
                                    <Icon name="camera" size={30} style={theme.Image_Picker_styles.camera_icon} onPress={openCamera}></Icon>

                                    <ImageBackground source={{ uri: cameraPhoto }} style={theme.Image_Picker_styles.image_style} />

                                    <Icon name="picture-o" size={30} style={theme.Image_Picker_styles.gallery_icon} onPress={openGallery}></Icon>

                                    <ImageBackground source={{ uri: galleryPhoto }} style={theme.Image_Picker_styles.image_style} />


                                </View>
                                <Text style={theme.Image_Picker_styles.ok_button} onPress={()=> navigation.goBack()}>OK</Text>
                            </Modal>
                            <View>
                                <Text onPress={() => setVisible(true)} style={theme.Image_Picker_styles.headingstyle}> Choose Your Profile Picture </Text>
                                <TouchableOpacity onPress={() => setVisible(true)}>
                                    <Ionicon name="ios-person-circle-outline" size={60} style={theme.Image_Picker_styles.person_icon} onPress={() => setVisible(true)}></Ionicon>
                                </TouchableOpacity>
                            </View>
                        </View>


                    </View>
                )
            }
        </ThemeConsumer>


    )
}

export default Image_Picker;