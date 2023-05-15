import React, { useState } from "react";
import { View, Image } from "react-native";
import { Avatar, Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Modal } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome'


const OrderPlaced = () => {
    const [visible, setVisible] = useState(false)
    return (
        <View>
            <Modal
                animationType="false"
                transparent={true}
                visible={visible}
            >
                <View>
                    <TouchableOpacity >
                        <Icon name="close" size={30}
                        onPress={()=> setVisible(false)}
                        />
                        <Avatar rounded source={require('../assets/success.gif')} size={200} />
                    </TouchableOpacity>
                </View>
            </Modal>

                <View>
                    <TouchableOpacity>
                        <Text>Your</Text>
                    </TouchableOpacity>
                </View>

        </View>
    )
}

export default OrderPlaced