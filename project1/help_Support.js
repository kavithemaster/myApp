import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { ThemeConsumer } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome"
const Contens = [
  {
    id: 1,
    name: "General issues"
  },
  {
    id: 2,
    name: "Partner Onboarding"
  },
  {
    id: 3,
    name: "Legal, Terms & Conditions"
  },
  {
    id: 4,
    name: "FAQs"
  },
  {
    id: 5,
    name: "Money FAQs"
  },
  {
    id: 6,
    name: "Dineout FAQs"
  },
  {
    id: 7,
    name: "Anti Discrimination Policy"
  },
]
const Help_Support = ({ navigation }) => {

  return (
    <ThemeConsumer>{

      ({ theme }) => (
        <View style={theme.Help_Support_styles.mainContainer}>
          <View>
            <TouchableOpacity>
              <Text style={theme.Help_Support_styles.text_style}>HELP WITH OTHER QUERIES</Text>
            </TouchableOpacity>
            <View>
              <Icon name='arrow-left' size={25} style={{ marginLeft: 20 }} onPress={() => navigation.goBack()} />
            </View>
          </View>
          <View>

            <FlatList
              data={Contens}
              renderItem={({ item }) =>
                <TouchableOpacity>
                  <Text style={theme.Help_Support_styles.content_style}>{item.name} </Text>
                </TouchableOpacity>
              }
              keyExtractor={item => item.id}
            />
          </View>

        </View>
      )
    }
    </ThemeConsumer>

  )
}

export default Help_Support;