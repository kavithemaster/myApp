import React from "react";
import { StyleSheet } from "react-native";

export const Contens_Styles = StyleSheet.create({
  container:{
    marginTop: 555,
  },
  image_view: {
    borderWidth: 2,
    padding: 20,
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 8,
    marginRight: 4,
  },
  image_src: {
    width: "100%",
    height: 460,
    borderRadius: 30,
  },
  text_style: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 20,
    fontStyle: "italic",
  },
  join_text: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "center", marginTop: 10,
    textDecorationLine: "underline",
    paddingBottom: 20,
    color: "white",
    backgroundColor: "rgb(265,206,22)",
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    width: 160,
    paddingTop: 10,
    paddingLeft: 18,
  },
})

// export default Contens_Stylesheet;