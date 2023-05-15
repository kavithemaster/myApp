import React, { useState } from "react";
import { Avatar, ThemeConsumer } from 'react-native-elements';
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"
import { Formik } from "formik";
import * as Yup from "yup";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import DateTimePicker from '@react-native-community/datetimepicker'


const validationSchema = Yup.object({
  fullname: Yup
    .string()
    .trim()
    .min(3, 'Invalid Name!')
    .required('Name is Required'),
  email: Yup
    .string()
    .email('Invalid email')
    .required('Email is Required'),
  password: Yup
    .string()
    .trim()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
    .min(8, ({ min }) => `password must be at least ${min} characters`)
    .max(20, ({ max }) => `password must be at least ${max} characters`)
    .required('Password is required'),
  conformPassword: Yup
    .string()
    .equals([Yup.ref('password'), null], 'Password doesnt match')
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .max(20, ({ max }) => `Password must be at least ${max} characters`)
    .required('Enter Conform Password'),
  phoneNumber: Yup
    .string()
    .matches(/(\d){10}\b/, 'Enter the valid Mobile number')
    .matches('^[6-9][0-9]*$', 'Enter the valid  number')
    .required('Phone number is required')
    .max(10, 'Invalid Number'),
})




const Register = ({ navigation }) => {


  const onAddHandler = async (values) => {
    const res = await axios.post("https://myapp-1ea54-default-rtdb.firebaseio.com/user.json", values)
    console.log(res.data);
    navigation.navigate("SignIn")
  }



  const RenderHeader = () => {
    return (
      <ThemeConsumer>
        {
          ({ theme }) => (
            <View style={theme.Registerstyle.headerContainer}>
              <View style={theme.Registerstyle.backButtonContainer}>
                <Icon name="arrow-left" size={28} onPress={() => navigation.goBack()} />
                {/* <Text style={theme.Registerstyle.headingStyle} onPress={() => navigation.navigate('SignIn')}>Back</Text> */}
              </View>
            </View>
          )
        }

      </ThemeConsumer>
    )
  }



  const InputFunction = () => {
    const userInfo = {
      fullname: "",
      email: "",
      password: "",
      conformPassword: "",
      phoneNumber: "",
    }



    const [isLiked, setIsLiked] = useState([
      {
        id: 1, name: "Male", selected: false

      },
      {
        id: 2, name: "Female", selected: false
      },
    ])
    const onRadioBtnClick = (item) => {
      let updatedState = isLiked.map((isLikedItem) =>
        isLikedItem.id === item.id ? { ...isLikedItem, selected: true }
          : { ...isLikedItem, selected: false })
      setIsLiked(updatedState)
    }
    const RadioButton = ({ onPress, selected, children }) => {
      return (
        <ThemeConsumer>{
          ({ theme }) => (
            <View style={theme.Registerstyle.radioButtonContainer}>
              <TouchableOpacity onPress={onPress} style={theme.Registerstyle.radioButton}>
                {selected ? <View style={theme.Registerstyle.radioButtonIcon} /> : null}
              </TouchableOpacity>
              <TouchableOpacity onPress={onPress}>
                <Text style={theme.Registerstyle.radioButtonText}>
                  {children}
                </Text>
              </TouchableOpacity>
            </View>
          )}

        </ThemeConsumer>
      )
    }
    const Render = () => {
      return (
        <ThemeConsumer>
          {
            ({ theme }) => (
              isLiked.map((item) => (
                <View style={theme.Registerstyle.radioButtonContainer} >

                  <RadioButton onPress={() => onRadioBtnClick(item)} selected={item.selected} key={item.id}>
                    <Text style={theme.Registerstyle.radioButtonText}>{item.name}</Text>
                  </RadioButton>
                </View>
              ))
            )
          }
        </ThemeConsumer>

      )
    }


    const DatePicker = () => {
      const [datePicker, setDatePicker] = useState(false)

      const [date, setDate] = useState(new Date())

      function onDateSelected(event, value) {
        setDate(value)
        setDatePicker(false)
      }
      return (
        <ThemeConsumer>
          {
            ({ theme }) => (
              <View style={theme.Registerstyle.inputContainer}>
                <Text style={theme.Registerstyle.placeholderText}>Date Of Birth</Text>
                <Text style={{ fontSize: 20, color: 'orange', marginTop: 45, marginBottom: 10, position: "absolute", marginLeft: 80 }}>{date.toLocaleDateString()}</Text>

                {datePicker && (
                  <DateTimePicker
                    value={date}
                    mode={'date'}
                    display={Platform.OS === 'android' ? 'spinner' : 'default'}
                    is24Hour={true}
                    onChange={onDateSelected}
                  />
                )}
                {!datePicker && (
                  <View style={theme.Registerstyle.placeholderText}>
                    <Icon name="calendar" size={30} onPress={setDatePicker} style={{ marginTop: 23, marginLeft: 40 }}></Icon>
                    {/* <Text style={theme.Registerstyle.placeholderText} onPress={setDatePicker}> CLick</Text> */}
                  </View>
                )}
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
            <Formik initialValues={userInfo} validationSchema={validationSchema} onSubmit={(values) => onAddHandler(values)}>
              {({ values, handleChange, errors, touched, handleBlur, handleSubmit }) => {
                const { fullname, email, password, conformPassword, phoneNumber } = values
                return (
                  <ScrollView>
                    <View >
                      <View style={theme.Registerstyle.inputContainer}>
                        <Text style={theme.Registerstyle.placeholderText}>Name</Text>
                        <TextInput placeholder=""
                          onChangeText={handleChange('fullname')}
                          placeholderTextColor="rgb(250,206,72)"
                          style={theme.Registerstyle.textInputStyle}
                          value={fullname}
                          onBlur={handleBlur('fullname')}
                        />
                        {errors ? (
                          <Text style={{ color: 'red', fontSize: 13 }}>{touched.fullname && errors.fullname}</Text>
                        ) : null}
                      </View>

                      <View style={theme.Registerstyle.inputContainer}>
                        <Text style={theme.Registerstyle.placeholderText}>Email Address</Text>
                        <TextInput placeholder=""
                          onChangeText={handleChange('email')}
                          placeholderTextColor="rgb(250,206,72)"
                          style={theme.Registerstyle.textInputStyle}
                          autoCapitalize='none'
                          value={email}
                          onBlur={handleBlur('email')}
                        />
                        {errors ? (
                          <Text style={{ color: 'red', fontSize: 13 }}>{touched.email && errors.email}</Text>
                        ) : null}
                      </View>

                      <View style={theme.Registerstyle.inputContainer}>
                        <Text style={theme.Registerstyle.placeholderText}>New Password</Text>
                        <TextInput placeholder=""
                          onChangeText={handleChange('password')}
                          secureTextEntry
                          placeholderTextColor="rgb(250,206,72)"
                          style={theme.Registerstyle.textInputStyle}
                          value={password}
                          onBlur={handleBlur('password')}
                        />
                        {errors ? (
                          <Text style={{ color: 'red', fontSize: 13 }}>{touched.password && errors.password}</Text>
                        ) : null}
                      </View>

                      <View style={theme.Registerstyle.inputContainer}>
                        <Text style={theme.Registerstyle.placeholderText}>Confirm Password</Text>
                        <TextInput placeholder=""
                          onChangeText={handleChange('conformPassword')}
                          placeholderTextColor="rgb(250,206,72)"
                          secureTextEntry
                          style={theme.Registerstyle.textInputStyle}
                          value={conformPassword}
                          onBlur={handleBlur('conformPassword')}
                        />
                        {errors ? (
                          <Text style={{ color: 'red', fontSize: 13 }}>{touched.conformPassword && errors.conformPassword}</Text>
                        ) : null}
                      </View>
                      <View style={theme.Registerstyle.inputContainer}>
                        <Text style={theme.Registerstyle.placeholderText}>Phone Number</Text>
                        <TextInput placeholder=""
                          onChangeText={handleChange('phoneNumber')}
                          placeholderTextColor="rgb(250,206,72)"
                          style={theme.Registerstyle.textInputStyle}
                          value={phoneNumber}
                          onBlur={handleBlur('phoneNumber')}
                          keyboardType="numeric"
                        />
                        {errors ? (
                          <Text style={{ color: 'red', fontSize: 13 }}>{touched.phoneNumber && errors.phoneNumber}</Text>
                        ) : null}
                      </View>
                      <View>
                        <Text style={theme.Registerstyle.Text}>Gender</Text>
                        <Render />
                      </View>
                      <View>
                        <DatePicker />
                      </View>
                      {/* <View style={styles.inputContainer}>
                  <Text style={styles.placeholderText}>Select Your States</Text>
                  <Drop_Down />
                </View> */}
                      <View>
                        <TouchableOpacity style={theme.Registerstyle.button} onPress={handleSubmit}>
                          <Text style={theme.Registerstyle.headingStyle} >REGISTER</Text>
                        </TouchableOpacity>
                      </View>

                    </View>
                  </ScrollView>
                )
              }
              }
            </Formik>
          )
        }
      </ThemeConsumer>

    )
  }

  return (
    <ThemeConsumer>
      {
        ({ theme }) => (
          <View style={theme.Registerstyle.container}>
            <RenderHeader />
            <View style={theme.Registerstyle.mainContainer}>
              <View style={theme.Registerstyle.welcomeHeading}>
                <View style={theme.Registerstyle.circle}>
                  <Avatar size={90} rounded source={require('../assets/download.jpg')} style={theme.Registerstyle.profile} resizeMode="contain"></Avatar>
                </View>
                <Text style={theme.Registerstyle.welcometext}>Register</Text>
              </View>
              <InputFunction />
            </View>
          </View>
        )
      }
    </ThemeConsumer>
  )
}


export default Register;
