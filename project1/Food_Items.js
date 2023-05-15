import React, { useEffect, useState, useContext } from "react";
import { View, Text, VirtualizedList, ActivityIndicator, ImageBackground, TouchableOpacity } from "react-native";
import { SearchBar, ThemeConsumer } from "react-native-elements";
import userContext from "../appContext";
import { useNavigation } from "@react-navigation/native";

const Food_Items_Details = () => {

const navigation = useNavigation()

  const { cart, setCart ,search} = useContext(userContext)

  const items = [
    {
      count: 1,
      id: 12,
      name: 'Milk ',
      req: require("../assets/milk.jpg"),
      amount:20,
      content: "Milk is an excellent source of vitamins and minerals, particularly calcium. It has an important role in bone health. Nutritionists recommend that people have milk and other dairy products, such as yoghurt and cheese, every day as part of a balanced diet."
    },
    {
      count: 1,
      id: 13,
      name: 'Legumes ',
      amount:60,
      req: require("../assets/legumes.jpg"),
      content: "They provide fiber, protein, carbohydrate, B vitamins, iron, copper, magnesium, manganese, zinc, and phosphorous. Legumes are naturally low in fat, are practically free of saturated fat, and because they are plant foods, they are cholesterol free as well."
    },
    {
      count: 1,
      id: 14,
      name: 'Egg',
      amount:10,
      req: require("../assets/egg.jpg"),
      content: "Eggs are a good source of protein (both whites/yolk). They also contain heart-healthy unsaturated fats and are a great source of important nutrients, such as vitamin B6, B12 and vitamin D,” says Kurt Hong, MD, an internal medicine specialist at Keck Medicine of USC."
    },
    {
      count: 1,
      id: 15,
      name: 'Bread',
      amount:25,
      req: require("../assets/bread.jpg"),
      content: "Breads are rich in complex carbohydrates. Carbohydrates are an important part of our diet as they provide us with energy. Our bread contains various B vitamins, including Thiamin (Vitamin B1) and Niacin (Vitamin B3) which are essential for releasing energy from food."
    },
    {
      count: 1,
      id: 16,
      name: 'Butter',
      amount:90,
      req: require("../assets/butter.jpg"),
      content: "Butter contains vitamin D, a nutrient that is vital for bone growth and development. It also has calcium, which is essential for bone strength. Calcium also helps prevent diseases such as osteoporosis, a condition that makes bones weak and fragile. It can help make your skin healthier."

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
              ListFooterComponent={<ActivityIndicator size={40} />
            }
              ListFooterComponentStyle={{ marginBottom: '5%' }}
              data={ITEM}
              renderItem={({ item }) => {
                let val = search?.toLowerCase().replace(/\s/, '');
                let newVal = item?.name?.toLowerCase().replace(/\s/, '');
                if (newVal?.includes(val)) {
                  return (
                    item != null ?
                      <View style={[theme.Food_Items_Style.itemContainer,]}>

                        <TouchableOpacity onPress={() => navigation.navigate('Shopping-details', item)} style={{ borderRadius: 20 }}>

                          <ImageBackground source={item.req}

                            style={theme.Food_Items_Style.img_src}
                          >
                            <View style={{ flexDirection: "row" }}>

                              <Text style={theme.Food_Items_Style.itemName}>{item.name}</Text>

                            
                              <Text style={theme.Food_Items_Style.text_style} onPress={() => addtocart(item)}>Add to Card + </Text>
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


export { Food_Items_Details };

























 // { count: 1, id: 21, name: 'Sausages', req: require("../assets/sausages.jpg") },
    // { count: 1, id: 22, name: 'Antikillers', req: require("../assets/antikillers.jpg") },
    // { count: 1, id: 23, name: 'Biscuts', req: require("../assets/biscuts.jpg") },
    // { count: 1, id: 24, name: 'Chips ', req: require("../assets/chips.jpg") },
    // { count: 1, id: 25, name: 'Donuts', req: require("../assets/donuts.jpg") },
    // { count: 1, id: 26, name: 'Apple', req: require("../assets/fruits/fru4.jpg") },
    // { count: 1, id: 27, name: 'PineApple', req: require("../assets/fruits/fru5.jpg") },
    // { count: 1, id: 28, name: 'Graps', req: require("../assets/fruits/fru7.jpg") },
    // { count: 1, id: 29, name: 'Dragon Fruit', req: require("../assets/fruits/fru9.jpg") },
    // { count: 1, id: 30, name: 'Lemon', req: require("../assets/fruits/fru10.jpg") },
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