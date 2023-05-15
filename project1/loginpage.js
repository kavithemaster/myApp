import React, { useEffect, useState } from "react";
import { Avatar, CheckBox } from 'react-native-elements';
import { Alert, View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"
import axios from "axios"
import userContext from "../appContext";
import { useContext } from "react";
import { ThemeConsumer } from 'react-native-elements';
import AsyncStorage from "@react-native-async-storage/async-storage";
const Login = ({ navigation }) => {

  const RenderHeader = () => {
    return (
      <ThemeConsumer>
        {
          ({ theme }) => (
            <View style={theme.login_style.headerContainer}>
              <View style={theme.login_style.backButtonContainer}>
              </View>
              <Icon name="question-circle-o" size={28} onPress={() => navigation.navigate('Modal_page')} />
            </View>
          )
        }
      </ThemeConsumer>
    )
  }

  const InputFunction = (title) => {
    const [checked, setChecked] = useState(false);
    const { uName, setuName } = useContext(userContext)
    const [cp, setCp] = useState("")
    const [userData, setUserData] = useState({})
    const [isPasswordSecure, setIsPasswordSecure] = useState(true)
    const [visible, setVisible] = useState()

    useEffect(() => {
      getData()
    }, []
    )

    const getData = async () => {
      const res = await axios.get("https://myapp-1ea54-default-rtdb.firebaseio.com/user.json")
      console.log(Object.values(res?.data));
      setUserData(Object.values(res?.data))
    }
    const onUsNameChangeHandler = e => {
      setuName(e)
    }
    const onCPChangeHandler = e => {
      setCp(e)
    }
    const onAddHandler = () => {
      let valid = false
      if (((uName.length > 1))) {
        const uData = { usname: uName, cp: cp }
        userData.map(async (res) => {
          // console.log("res",res);
          if (res.email === uData.usname && res.password === uData.cp) {
            valid = true
            await AsyncStorage.setItem('login', 'true')
            navigation.navigate('NavTab')
          }
        })
        if (!valid) {
          Alert.alert("Your Email id or Password is Incorrect")
        }
        else {
          Alert.alert("Logined Successfully ", 'Click ok to continue')
        }
      }
      else {
        Alert.alert(
          'Please enter the deatils',
          'Name and Password  ',
          [
            {
              text: 'OK',
            },
          ],
          {
            cancelable: true,
          })
      }
    }

    return (
      <ThemeConsumer>
        {
          ({ theme }) => (
            <View>
              <View style={theme.login_style.inputContainer}>
                <Text style={theme.login_style.placeholderText}>Email Address</Text>
                <TextInput placeholder="" 
                onChangeText={(text) => onUsNameChangeHandler} 
                // onChangeText={onUsNameChangeHandler}
                  placeholderTextColor="rgb(250,206,72)"
                  style={theme.login_style.textInputStyle} />
              </View>
              <View>

              </View>
              <View style={theme.login_style.inputContainer}>

                <Text style={theme.login_style.placeholderText}>Password</Text>

                <TextInput placeholder="" onChangeText={onCPChangeHandler}
                  secureTextEntry={visible}
                  placeholderTextColor="rgb(250,206,72)"
                  style={theme.login_style.textInputStyle}

                />
                <Icon name={isPasswordSecure ? "eye" : "eye-slash"} size={25} style={{ marginLeft: 300, marginTop: 1 }}
                  onPress={() => { isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true); setVisible(!visible) }}
                />
              </View>


              <View style={{ marginLeft: 20, marginTop: 50 }}>
                <CheckBox
                  title='Do you understand the terms and conditions'
                  checked={checked}
                  onPress={() => setChecked(!checked)}
                />
              </View>

              <View style={theme.login_style.inputContainer}>
                <TouchableOpacity style={theme.login_style.button} onPress={onAddHandler} >
                  <Text style={theme.login_style.headingStyle} >LOGIN</Text>

                </TouchableOpacity>

              </View>
              <View>
                <Text style={theme.login_style.registerStyle}
                  onPress={() => navigation.navigate("Register")}
                >Do you want to Register ? </Text>
              </View>
            </View>
          )
        }
      </ThemeConsumer>
    )
  }
  return (
    <ThemeConsumer>
      {
        ({ theme }) => (
          <View style={theme.login_style.container}>
            <RenderHeader />
            <View style={theme.login_style.mainContainer}>
              <View style={theme.login_style.welcomeHeading}>
                <View style={theme.login_style.circle}>
                  <Avatar size={90} rounded source={require('../assets/download.jpg')} style={theme.login_style.profile} resizeMode="contain"></Avatar>
                </View>
                <Text style={theme.login_style.welcometext}>Welcome</Text>
              </View>
              <InputFunction />
            </View>
          </View>
        )
      }
    </ThemeConsumer>
  )

}

export default Login;





