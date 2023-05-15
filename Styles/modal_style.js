import { StyleSheet } from "react-native";
export const modal_style = StyleSheet.create({
  Main_Container: {
    marginTop: 32,
  },
  modalView: {
    marginTop: 185,
    backgroundColor: 'white',
    padding: 35,
    alignItems: 'center',
  },
  button: {
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 10,
    elevation: 2,
    width: "90%",
    alignSelf: "center"
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 23,
  },
  textStyle1: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 26,
    color: "red",
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  image: {
    marginTop: 120,
    backgroundColor: 'rgb(250,206,72)',
    fontSize: 20,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,

  },
  about_us_text: {
    backgroundColor: 'rgb(250,206,72)',
    width: "80%",
    alignSelf: "center",
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    height: 40,
    paddingTop: 5,
  },
  back_text: {
    fontSize: 25,
    marginTop: 30,
    alignSelf: "flex-end",
    fontWeight: "bold",
    backgroundColor: 'rgb(250,206,72)',
    borderRadius: 20,
    marginRight: 20,
    padding: 10,
  }

})
  // export default modal_style;