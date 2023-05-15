import React, { useState } from 'react';
import { Button, Text, BottomSheet, ListItem } from 'react-native-elements';
import { StyleSheet, View } from "react-native";

const Bottom_Sheet = () => {
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    { title: 'List 1' },
    { title: 'List 2' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];

  return (
    <View>
      <Text style={styles.container}></Text>
      <Button
        title="Are you Happy"
        onPress={() => setIsVisible(true)}
        buttonStyle={{ backgroundColor: 'violet' }}
      />
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
      >
        {list.map((l, i) => (
          <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </View>

  )

        }
const styles=StyleSheet.create({
  container:{
    marginBottom:780,
  },
})
export default Bottom_Sheet;