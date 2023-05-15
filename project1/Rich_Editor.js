import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { ThemeConsumer } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome'
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";

const Rich_Editor = ({ navigation }) => {
    const richText = React.useRef();
    return (
        <View >
            <View style={{marginLeft:20, marginTop:60}}>
                <Icon name="arrow-left" size={25} onPress={()=> navigation.goBack()} />
            </View>
            <View style={{ marginTop: 100 ,width:"80%",alignSelf:"center" }}>
                <RichEditor
                    ref={richText}
                    editorStyle={{ backgroundColor: "white", color: "black", placeholderColor: "red",}}
                    placeholder="Type Here"
                    initialHeight={220}
                />
                <RichToolbar
                    editor={richText}
                    actions=
                    {[
                        actions.setBold,
                        actions.setItalic,
                        actions.insertBulletsList,
                        actions.insertOrderedList,
                        actions.insertLink,
                        actions.keyboard,
                        actions.setStrikethrough,
                        actions.setUnderline,
                        actions.removeFormat,
                        actions.insertVideo,
                        actions.checkboxList,
                        actions.undo,
                        actions.redo,
                    ]}
                />
                <ThemeConsumer>
                    {
                        ({ theme }) => (
                            <View>
                                <TouchableOpacity onPress={()=>navigation.goBack()}>
                                    <Text style={theme.Rich_styles.text}>
                                        Submit
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                </ThemeConsumer>

            </View>
        </View>
    )
}

export default Rich_Editor;