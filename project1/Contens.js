import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeConsumer } from 'react-native-elements';
import Carousel from 'react-native-reanimated-carousel';

const data = [
  {
    id: 1,
    req: require("../assets/content_image.jpg"),
  },
  {
    id: 2,
    req: require("../assets/content_image1.jpg"),
  },
  {
    id: 3,
    req: require("../assets/content_image2.jpg"),
  },
  {
    id: 4,
    req: require("../assets/content_image3.jpg"),
  },
  {
    id: 5,
    req: require("../assets/content_image4.jpg"),
  },
];

const renderItem = ({ item }) => {
  return (
    <ThemeConsumer>
      {
      ({theme})=>(
        <View
      style={theme.Contens_Styles.image_view}>
      <Image source={item.req} style={theme.Contens_Styles.image_src} />

    </View>
      )
    }
    </ThemeConsumer>
   
  );
};

const Contents = ({ navigation }) => {
  return (
    <ThemeConsumer>
      {
        ({theme})=>(
          <View>

          <View style={{ flex: 1 }}>
            <Carousel
              loop
              width={407}
              height={1200}
              autoPlay={true}
              data={data}
              renderItem={renderItem}
              scrollAnimationDuration={500}
    
            />
    
          </View>
          <View style={theme.Contens_Styles.container}>
            <Text style={theme.Contens_Styles.text_style}>Ignore the annual percentage rate when shopping for a mortgage.</Text>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('NavTab', { screen: 'Products' })}
              >
                <Text style={theme.Contens_Styles.join_text}>Join With Us</Text>
              </TouchableOpacity>
            </View>
          </View>
    
        </View>
        )
      }
    </ThemeConsumer>
   
  )
}

export default Contents