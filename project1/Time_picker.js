import React, { useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ThemeConsumer } from 'react-native-elements';


const Time_Picker = ({ navigation }) => {

    // const [datePicker, setDatePicker] = useState(false)

    // const [date, setDate] = useState(new Date())

    const [timePicker, setTimePicker] = useState(false)

    const [time, setTime] = useState(new Date(Date.now()))



    // function onDateSelected(event, value) {
    //     setDate(value)
    //     setDatePicker(false)
    // }

    function onTimeSelected(event, value) {
        setTime(value)
        setTimePicker(false)
    }


    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View>
                        <Icon name='arrow-left-thick' size={30} onPress={() => navigation.goBack()} style={{ marginTop: 30, marginLeft: 10 }} />
                        <View style={theme.DatePicker_styles.MainContainer}>


                            {/* {datePicker && (
                                <DateTimePicker
                                    value={date}
                                    mode={'date'}
                                    display={Platform.OS === 'android' ? 'spinner' : 'default'}
                                    is24Hour={true}
                                    onChange={onDateSelected}
                                />
                            )} */}
                            {timePicker && (
                                <DateTimePicker
                                    value={time}
                                    mode={'time'}
                                    display={Platform.OS === 'android' ? 'spinner' : 'default'}
                                    is24Hour={false}
                                    onChange={onTimeSelected}
                                />
                            )}

                            {/* {!datePicker && (
                                <View style={{ margin: 10 }}>
                                    <TouchableOpacity onPress={setDatePicker} >
                                        <Text style={theme.DatePicker_styles.touch_text}>DATE</Text>
                                    </TouchableOpacity>
                                </View>
                            )} */}


                            {/* <Text style={theme.DatePicker_styles.text}>{date.toDateString()}</Text> */}
                            {!timePicker && (
                                <View style={{ margin: 10 }}>
                                    <TouchableOpacity onPress={setTimePicker} >
                                        <Text style={theme.DatePicker_styles.touch_text1}>TIME</Text>
                                    </TouchableOpacity>
                                </View>
                            )}

                            <Text style={theme.DatePicker_styles.text}>{time.toLocaleTimeString('en-US')}</Text>

                        </View>

                    </View>
                )
            }
        </ThemeConsumer>



    )
}

export default Time_Picker;
