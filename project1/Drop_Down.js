import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { ThemeConsumer } from "react-native-elements";

const Drop_Down = ({ navigation }) => {
   const [open, setOpen] = useState(false);
   const [value, setValue] = useState(null);
   const [items, setItems] = React.useState([
      {
         label: "Tamil Nadu",
         value: "1"
      },
      {
         label: "Kerala",
         value: "2"

      },
      {
         label: "Andhra Pradesh ",
         value: "3"
      },
      {
         label: "Goa",
         value: "4"
      },
      {
         label: "Karanataka",
         value: "5"
      },
      {
         label: "Gujarat",
         value: "6"
      },
      {
         label: "Harayana",
         value: "7"
      },

   ]);
   return (
      <ThemeConsumer>
         {
            ({ theme }) => (
               <View style={theme.Drop_Downstyle.drop_downstyle}>
                  {/* <ScrollView> */}
                     <DropDownPicker placeholder="Select Your States"
                        // zIndex={1}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                     />
                  {/* </ScrollView> */}

               </View>
            )
         }
      </ThemeConsumer>

   )


}
export default Drop_Down;















