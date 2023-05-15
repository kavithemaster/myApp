import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./project1/loginpage";
import Navtab from "./project1/navigationdrawer";
import Signin from "./project1/signinpage";
import Splash from "./project1/Splash_screen";
import Contents from "./project1/Contens";
import userContext from "./appContext";
import Shopping_details from "./project1/shopping_details";
import { ThemeProvider } from "react-native-elements";
import Theme from "./Themes";
import Image_Picker from "./project1/Image_Picker";
import Register from "./project1/Registerpage";
import Rich_Editor from "./project1/Rich_Editor";
import Bottom_Sheet from "./project1/bottomsheet";
import Profile from "./project1/profile";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Sports_Items } from "./project1/Sports_Items";
import Logout from "./project1/Logout";
import Modal_page from "./project1/modal";
import Time_Picker from "./project1/Time_picker";
import Help_Support from "./project1/help_Support";
import { Food_Items_Details } from "./project1/Food_Items";
import Main_page from "./project1/Main page";
import { Fruits_Items_Details } from "./project1/Fruits_Items";
import OrderPlaced from "./project1/Order_placed";
import Rating_Page from "./project1/Rating";
import Call from "./project1/Call";
import Working from "./project1/work_out";
import Drop_Down from "./project1/Drop_Down";

const Stack = createStackNavigator();

const App = () => {

  const [uName, setuName] = useState("")
  const [password, setPassword] = useState()
  const [cart, setCart] = useState([])
  const [img, setImg] = useState('')
  const [login,setLogin] = useState(false)
  const [splash,setSplash] = useState(true)
  const [ search, setSearch]= useState('')
  
  
  useEffect(() =>{
   get()
  },[])

   const get = async() =>{
    let res
    await AsyncStorage.getItem('login')
    .then(val =>{
      if(val == 'true')
      {
        res = true
      }
      else{
        res = false
      }
    })

    setLogin(res)
    setSplash(false)
   }

   if(splash)
   {
    return(
      <ThemeProvider theme={Theme}>
        <Splash />

      </ThemeProvider>
    )
      }
  return (
    <ThemeProvider theme={Theme}>

      <userContext.Provider value={{
        uName,
        setPassword,
        setuName,
        password,
        cart,
        setCart,
        source: img,
        setSource: setImg,
        login,
        setLogin,
        search,
        setSearch,
      }
      }
       >

        <NavigationContainer>
          <Stack.Navigator 
          initialRouteName={login ? 'NavTab' : 'SignIn'}
          // initialRouteName='Bottom_Sheet'
           screenOptions={{
            header: () => null
          }
          }>
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='SignIn' component={Signin} />
            <Stack.Screen name='NavTab' component={Navtab} />
            <Stack.Screen name='Contents' component={Contents} />
            <Stack.Screen name='Shopping-details' component={Shopping_details} />
            <Stack.Screen name='Sports_Items' component={Sports_Items} />
            <Stack.Screen name='Bottom_Sheet' component={Bottom_Sheet} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />         
            <Stack.Screen name='Rich_Editor' component={Rich_Editor} />
            <Stack.Screen name='Image_Picker' component={Image_Picker} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name="Logout" component={Logout}/>
            <Stack.Screen name="Modal_page" component={Modal_page}/>
            <Stack.Screen name="Time_picker" component={Time_Picker}/>
            <Stack.Screen name="Help_Support" component={Help_Support}/>
            <Stack.Screen name="Food_Items_Details" component={Food_Items_Details}/>
            <Stack.Screen name="Fruits_Items_Details" component={Fruits_Items_Details}/>
            <Stack.Screen name="Main_page" component={Main_page}/>
            <Stack.Screen name="OrderPlaced" component={OrderPlaced}/>
            <Stack.Screen name="Rating" component={Rating_Page}/>
            <Stack.Screen name="Call" component={Call}/>
            <Stack.Screen name="Working" component={Working}/>
            <Stack.Screen name="Drop_Down" component={Drop_Down}/>

          </Stack.Navigator>
        </NavigationContainer>
      </userContext.Provider>
    </ThemeProvider>

  )
}


export default App;