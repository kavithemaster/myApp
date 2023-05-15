import { StyleSheet } from "react-native";
export const SportsItems_style = StyleSheet.create({
  itemContainer: {
    borderRadius: 1,
    paddingBottom: 1,
    // backgroundColor: "darkturquoise",
  },
  itemName: {
    fontSize: 20,
    color: 'red',
    backgroundColor: "rgb(250,206,7)",
    width: 120,
    fontWeight: '600',
    paddingLeft: 18,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    marginLeft: 5,
    borderWidth:1,
  },
  text_style: {
    fontSize: 20,
    color: 'red',
    backgroundColor: "rgb(250,206,7)",
    width: 160,
    fontWeight: 'bold',
    paddingLeft: 19,
    marginLeft: 112,
    marginTop: 123,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    position: "absolute",
    borderWidth:1,
  },
  img_src: {
    alignSelf: "center",
    height: 150,
    width: 280,
    margin: 10,
    backgroundColor:"red",
  }
})

// export default ShoppingItems_style;
