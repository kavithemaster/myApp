import React from "react";
import { View} from "react-native";
import { Avatar, ThemeConsumer } from "react-native-elements";
const image = { uri: "https://reactjs.org/logo-og.png" };
const image1 = { uri: "https://th.bing.com/th/id/R.3d88a927f8529dcba03364b09d98adbe?rik=JYmQaMVSULpYQg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images.jpg&ehk=BNPsuSOUR7ATZ3EpRwxx1xFl7LUbO3tYlu1wFLCBrCE%3d&risl=&pid=ImgRaw&r=0" };


const Splash = () => {
  return (
    <ThemeConsumer>
      {
        ({ theme }) => (
          <View style={theme.Splash_style.container}>
            <Avatar rounded source={require("../assets/splash.jpg")} size={350}></Avatar>
          </View>
        )
      }
    </ThemeConsumer>
  )
}
export default Splash;






