import React, { useEffect, useState, useContext } from "react";
import Icon from "react-native-vector-icons/FontAwesome"
import { View, Text, VirtualizedList, ActivityIndicator, ImageBackground, TouchableOpacity } from "react-native";
import { ThemeConsumer } from "react-native-elements";
import userContext from "../appContext";
import { useNavigation } from "@react-navigation/native";



const Sports_Items = () => {
  const navigation = useNavigation()
  const { cart, setCart, search } = useContext(userContext)

  const items = [
    {
      count: 1,
      id: 1,
      name: 'Cycling ',
      req: require("../assets/cycling_image.jpg"),
      amount: 22220,
      content: "You can fit about 15 bicycles in the same space that one car occupies. It is 20 times cheaper to maintain a bicycle than a car. If the number of cyclists was tripled, the rate of motorist-bicyclist accidents would be cut in half. The world manufactures about 100 million bikes each year"
    },
    {
      count: 1,
      id: 2,
      name: 'Tennis ',
      amount: 11120,
      req: require("../assets/tennis_image.jpg"),
      content: "Tennis is a racket sport that can be played individually against a single opponent (singles) or between two teams of two players each (doubles). Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over a net and into the opponent's court."
    },
    {
      count: 1,
      id: 3,
      name: 'Boxing',
      amount: 23120,
      req: require("../assets/boxing_image.jpg"),
      content: "Sports is a form of high intensity interval training (HIIT) and can push your body to repeatedly sustain intense bouts of activity (1). High intensity interval training has been associated with a decreased risk of heart disease ( 2 ). Plus, boxing can improve your aerobic fitness."
    },
    {
      count: 1,
      id: 4,
      name: 'Swimming ',
      amount: 1120,
      req: require("../assets/swimming_image.jpg"),
      content: "A swimsuit can be described by various names, some of which are used only in particular locations, including swimwear, bathing suit, swimming costume, bathing costume, swimming suit, swimmers, swimming togs, bathers, cossie (short for (costume), or swimming trunks for men, besides others.",
    },
    {
      count: 1,
      id: 5,
      name: 'Shooting',
      amount: 98020,
      req: require("../assets/shooting_image.jpg"),
      content: "Shooting an air rifle requires concentration, focus, and physical exertion, which can help improve your hand-eye coordination, mental acuity, and physical fitness. Additionally, spending time outdoors while shooting can be an excellent way to get some fresh air and exercise."
    },
    {
      count: 1,
      id: 6,
      name: 'Snooker',
      amount: 34220,
      req: require("../assets/snooker_image.jpg"),
      content: "Snooker is a positive health promotional activity, providing benefits for mental, social and physical health. The game offers opportunity to improve social skills, improve confidence and make friendships. Snooker also improved concentration and maths skills"
    },
    {
      count: 1,
      id: 7,
      name: 'Basketball ',
      amount: 23120,
      req: require("../assets/basketball_image.jpg"),
      content: "Shooting, dribbling, defending, rebounding, and passing are among the most significant abilities in the game of basketball. Aside from these basketball-specific talents, agility, acrobatic ability, speed, and endurance are all valuable assets in the game"
    },
    {
      count: 1,
      id: 8,
      name: 'Football ',
      amount: 32120,
      req: require("../assets/football_image.jpg"),
      content: "It's a physically demanding game that provides an opportunity for players to improve their speed, agility, strength, hand-eye coordination, and overall cardiovascular endurance. The friendships amongst a team of football players is unlike any other sport due to the high volume of teammates."
    },
    {
      count: 1,
      id: 9,
      name: 'Volleyball',
      amount: 3320,
      req: require("../assets/volleyball_iamge.jpg"),
      content: "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules. It has been a part of the official program of the Summer Olympic Games since Tokyo 1964."
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



  // const {search, setSearch,} = useContext("")



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
    <View>
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
                ListFooterComponentStyle={{ marginBottom: '10%' }}
                data={ITEM}
                renderItem={({ item }) => {
                  let val = search?.toLowerCase().replace(/\s/, '');
                  let newVal = item?.name?.toLowerCase().replace(/\s/, '');
                  if (newVal?.includes(val)) {
                    return (
                      item != null ?
                        <View style={theme.SportsItems_style.itemContainer}>

                          <TouchableOpacity onPress={() => navigation.navigate('Shopping-details', item)} >

                            <ImageBackground source={item.req}

                              style={theme.SportsItems_style.img_src} onPress={() => navigation.navigate('Shopping-details', item)}
                            >
                              <View style={{ flexDirection: "row" }}>

                                <Text style={theme.SportsItems_style.itemName}>{item.name}</Text>

                                <Text style={theme.SportsItems_style.text_style} onPress={() => addtocart(item)}>Add to Card + </Text>
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
      {/* <View>
   <Empty/>
    </View> */}
    </View>


  )
}


export { Sports_Items };

























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