import React, { useEffect, useState, useContext } from "react";
import Icon from "react-native-vector-icons/FontAwesome"
import { View, Text, VirtualizedList, ActivityIndicator, ImageBackground, TouchableOpacity } from "react-native";
import { SearchBar, ThemeConsumer } from "react-native-elements";
import userContext from "../appContext";
import { useNavigation } from "@react-navigation/native";

const Fruits_Items_Details = () => {
  const navigation = useNavigation()
  const { cart, setCart,search } = useContext(userContext)

  const items = [
    { 
      count: 1, 
      id: 17, 
      name: 'Apple', 
      amount:220,
      req: require("../assets/fruits/fru4.jpg") ,
      content:"An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found.",
    },
    { 
      count: 1, 
      id: 18, 
      name: 'PineApple',
      amount:120,
       req: require("../assets/fruits/fru5.jpg") ,
       content:"Pineapples are rich in flavonoids and phenolic acids, two antioxidants that protect your cells from free radicals that can cause chronic disease. More studies are needed, but bromelain has also been linked to reduced risk of cancer.",
      },
    { 
      count: 1,
       id: 19, 
       name: 'Graps',
       amount:100,
        req: require("../assets/fruits/fru7.jpg"),
        content:"Grapes are fleshy, rounded fruits that grow in clusters made up of many fruits of greenish, yellowish or purple skin. The pulp is juicy and sweet, and it contain several seeds or pips. It is a well-known fruit; it is eaten raw, although it is mainly used for making wine.",
       },
    { 
      count: 1, 
      id: 20, 
      name: 'Dragon Fruit', 
      amount:110,
      req: require("../assets/fruits/fru9.jpg"),
      content:"Dragon fruit is high in vitamin C and other antioxidants, which are good for your immune system. It can boost your iron levels. Iron is important for moving oxygen through your body and giving you energy, and dragon fruit has iron. And the vitamin C in dragon fruit helps your body take in and use the iron.",
     },
    { 
      count: 1, 
      id: 21,
       name: 'Lemon',
       amount:5,
       req: require("../assets/fruits/fru10.jpg"),
       content:"Lemons are high in vitamin C, fiber, and various beneficial plant compounds. These nutrients are responsible for several health benefits. In fact, lemons may support heart health, weight control, and digestive health",
       },
  ]



  const [ITEM, setITEM] = useState([])

  useEffect(() => {
    let arr = [];
    for (i = 0; i < 3; i++) {
      arr.push(items[i]);
    }
    setITEM([...arr]);
  }, []);



  const onEndReached = () => {
    let newArr = [];
    for (i = 0; i < 2; i++) {
      newArr.push(items[ITEM.length + i]);
    }
    setITEM(prev => {
      return [...prev, ...newArr];
    });
  };



  // const {search, setSearch} = useContext("")



  const getItem = (items, index) => {
    return items[index]
  }


  const addtocart = item => {
    let data = [...cart]
    let index = data.findIndex(i => item.id == i.id)
    if (index > -1) {
      data[index].count += 1
    }
    else {
      data.push(item)
    }
    setCart(data)
  }



  return (
    <ThemeConsumer>
      {
        ({ theme }) => (
          <View>
            <VirtualizedList
              horizontal
              getItemCount={items => items.length}
              keyExtractor={(item, index) => index}
              getItem={getItem}
              onEndReached={onEndReached}
              onEndReachedThreshold={0.01}
              ListFooterComponent={<ActivityIndicator size={40} />}
              ListFooterComponentStyle={{ marginBottom: '20%' }}
              data={ITEM}
              renderItem={({ item }) => {
                let val = search?.toLowerCase().replace(/\s/, '');
                let newVal = item?.name?.toLowerCase().replace(/\s/, '');
                if (newVal?.includes(val)) {
                  return (
                    item != null ?
                      <View style={[theme.Fruits_Items_Styles.itemContainer,]}>

                        <TouchableOpacity onPress={() => navigation.navigate('Shopping-details', item)} style={{ borderRadius: 20 }}>

                          <ImageBackground source={item.req}

                            style={theme.Fruits_Items_Styles.img_src}
                          >
                            <View style={{ flexDirection: "row" }}>

                              <Text style={theme.Fruits_Items_Styles.itemName}>{item.name}</Text>

                              {/* <Icon name="bars" size={23} style={theme.Fruits_Items_Styles.icon_style} onPress={() => navigation.navigate('Shopping-details', item)}></Icon> */}
                              <Text style={theme.Fruits_Items_Styles.text_style} onPress={() => addtocart(item)}>Add to Card + </Text>
                            </View>
                         

                          </ImageBackground>
                        </TouchableOpacity>

                      </View>
                      : null)
                }
              }}
            />


          </View>

        )
      }
    </ThemeConsumer>

  )
}


export { Fruits_Items_Details };

























 // { count: 1, id: 21, name: 'Sausages', req: require("../assets/sausages.jpg") },
    // { count: 1, id: 22, name: 'Antikillers', req: require("../assets/antikillers.jpg") },
    // { count: 1, id: 23, name: 'Biscuts', req: require("../assets/biscuts.jpg") },
    // { count: 1, id: 24, name: 'Chips ', req: require("../assets/chips.jpg") },
    // { count: 1, id: 25, name: 'Donuts', req: require("../assets/donuts.jpg") },
   
    // { count: 1, id: 31, name: 'Bed ', req: require("../assets/furniture/bed.jpg") },
    // { count: 1, id: 32, name: 'Beeros ', req: require("../assets/furniture/beeros.jpg") },
    // { count: 1, id: 33, name: 'Chairs', req: require("../assets/furniture/chairs.jpg") },
    // { count: 1, id: 34, name: 'Sofa', req: require("../assets/furniture/sofa.jpg") },
    // { count: 1, id: 35, name: 'Stand', req: require("../assets/furniture/stand.jpg") },
    // { count: 1, id: 36, name: 'Tables', req: require("../assets/furniture/tables.jpg") },
    // { count: 1, id: 37, name: 'Air Coller', req: require("../assets/home_appliances/air_coller.jpg") },
    // { count: 1, id: 38, name: 'Cleaner', req: require("../assets/home_appliances/cleaner.jpg") },
    // { count: 1, id: 39, name: 'Fan', req: require("../assets/home_appliances/fan.jpg") },
    // { count: 1, id: 40, name: 'Gas', req: require("../assets/home_appliances/gas.jpg") },