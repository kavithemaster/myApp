import { View } from "react-native"

const Working=()=>{
  return(
    <View>
       </View>
  )
}
export default Working








































// import React, { useState, useEffect } from 'react'
// import { ActivityIndicator, ScrollView, View, VirtualizedList, TouchableOpacity } from 'react-native'
// import { Text } from 'react-native-elements'

// const Working = () => {

//   const data = [
//     {
//       id: 1,
//       name: "One"
//     },
//     {
//       id: 2,
//       name: "Two"
//     },
//     {
//       id: 3,
//       name: "Three",
//     },
//     {
//       id: 4,
//       name: "Four"
//     },
//     {
//       id: 5,
//       name: "Five"
//     },
//     {
//       id: 6,
//       name: "Six",
//     },
//     {
//       id: 7,
//       name: "Svn"
//     },
//     {
//       id: 8,
//       name: "Eight"
//     },
//     {
//       id: 9,
//       name: "Nine",
//     },
//   ]

//   const [ITEM, setITEM] = useState([])

//   useEffect(() => {
//     let arr = [];
//     for (i = 0; i < 3; i++) {
//       arr.push(data[i]);
//     }
//     setITEM([...arr]);
//   }, []);

//   const onEndReached = () => {
//     let newArr = [];
//     for (i = 0; i < 3; i++) {
//       newArr.push(data[ITEM.length + i]);
//     }
//     setITEM(prev => {
//       return [...prev, ...newArr];
//     });
//   };

//   const getItem = (data, index) => {
//     return data[index]
//   }

//   return (
//     <View>
    
//         <VirtualizedList
//         // horizontal
//           getItemCount={data => data.length}
//           keyExtractor={(item, index) => index}
//           getItem={getItem}
//           onEndReached={onEndReached}
//           onEndReachedThreshold={0.01}
//           ListFooterComponent={<ActivityIndicator size={90} />
//           }
//           ListFooterComponentStyle={{ marginBottom: '5%' }}
//           data={ITEM}
//           renderItem={({ item }) => {
//             return (
//               item != null ?
//                 <View>
//                     <ScrollView>
//                   <TouchableOpacity style={{backgroundColor:"yellow"}}>
//                     <Text style={{ fontSize: 30, marginBottom: 370, backgroundColor: "red" }}>{item.name}</Text>
//                   </TouchableOpacity>
//                   </ScrollView>
//                 </View>
//                 : null)
//             // }
//           }}
//         />
//       {/* </ScrollView> */}
//     </View>
//   )
// }

// export default Working









































// import { Formik } from "formik";
// import React from "react";
// import * as Yup from 'yup';
// import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";
// import axios from "axios";
// import { Text } from "react-native-elements";


// const Validation = Yup.object({
//     name: Yup
//         .string()
//         .required('Name is Required'),

//     email: Yup
//         .string()
//         .required('Email is Required'),
//     phoneNumber: Yup
//         .number()
//         .required('Phone Number is Required'),
// })


// const Working = ({ navigation }) => {

//     const onAddHandler = async (values) => {
//         const res = await axios.post("https://myapp-1ea54-default-rtdb.firebaseio.com/user.json", values)
//         console.log(res.data);
//         navigation.goBack()
//     }
//     const InputFunction = () => {
//         const userInfo = {
//             name: "",
//             email: "",
//             phoneNumber: "",
//         }

//         return (
//             <View>
//                 <Formik validationSchema={Validation} initialValues={userInfo} onSubmit={(values) => onAddHandler(values)}>
//                     {({ values, handleChange, errors, touched, handleBlur, handleSubmit }) => {
//                         const { name, email, phoneNumber } = values
//                         return (
//                             <ScrollView>
//                                 <View>
//                                     <View style={{ backgroundColor: "white" }}>
//                                         <Text style={{ fontSize: 20 }}>Name</Text>
//                                         <TextInput
//                                             style={{ fontSize: 30, color: "black" }}
//                                             placeholder=""
//                                             onChangeText={handleChange('name')}
//                                             value={name}
//                                             onBlur={handleBlur("name")}
//                                         />
//                                         {errors ? (
//                                             <Text style={{ color: 'red', fontSize: 23 }}>{touched.name && errors.name}</Text>
//                                         ) : null}
//                                     </View>
//                                     <View style={{ backgroundColor: "white" }}>
//                                         <Text style={{ fontSize: 20 }}>Email</Text>
//                                         <TextInput
//                                             style={{ fontSize: 30, color: "black" }}
//                                             placeholder=""
//                                             onChangeText={handleChange("email")}
//                                             value={email}
//                                             onBlur={handleBlur('email')}
//                                         />
//                                         {errors ? (
//                                             <Text style={{ color: 'red', fontSize: 23 }}>{touched.email && errors.email}</Text>
//                                         ) : null}
//                                     </View>
//                                     <View style={{ backgroundColor: "white" }}>
//                                         <Text style={{ fontSize: 20 }}>Phone Number</Text>
//                                         <TextInput
//                                             style={{ fontSize: 30, color: "black" }}
//                                             placeholder=""
//                                             onChangeText={handleChange("phoneNumber")}
//                                             value={phoneNumber}
//                                             onBlur={handleBlur('phoneNumber')}
//                                         />
//                                         {errors ? (
//                                             <Text style={{ color: "red", fontSize: 23 }}>{touched.phoneNumber && errors.phoneNumber}</Text>
//                                         ) : null}
//                                     </View>
//                                     <View>
//                                         <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: "yellow", width: '30%', borderRadius: 20, alignSelf: "center" }}>
//                                             <Text style={{ fontSize: 30, textAlign: "center" }}>Submit</Text>
//                                         </TouchableOpacity>
//                                     </View>
//                                 </View>
//                             </ScrollView>
//                         )
//                     }}
//                 </Formik>
//             </View>
//         )
//     }
//     return (
//         <View>
//             <InputFunction />
//         </View>
//     )
// }
// export default Working