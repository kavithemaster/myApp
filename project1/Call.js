import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Text, View, TouchableOpacity, Linking, Platform } from 'react-native';
import { Avatar, ThemeConsumer } from 'react-native-elements';

const Call = ({ navigation }) => {
  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:{+91 8248553379}';
    }
    else {
      phoneNumber = 'telprompt:{+91 6383845841}';
    }
    Linking.openURL(phoneNumber);
  }
  return (
    <ThemeConsumer>
      {
        ({ theme }) => (
          <View style={theme.Call_styles.main_Container}>
            <FontAwesome name='arrow-left' size={30} style={theme.Call_styles.arrow_left} onPress={() => navigation.goBack()}></FontAwesome>
            <TouchableOpacity >
              <Text style={theme.Call_styles.text}>Make a Call and Connect with our Supervisor</Text>
            </TouchableOpacity>
            <View style={theme.Call_styles.container}>
              <Icon name='arrow-down-circle' size={56} style={theme.Call_styles.arrow_down}></Icon>
              <Avatar rounded source={require('../assets/calling.gif')} size={190} onPress={this.dialCall} />
            </View>
          </View>
        )
      }
    </ThemeConsumer>
  )
}

export default Call