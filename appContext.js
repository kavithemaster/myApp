import { createContext } from "react";

const userContext = createContext({
    uName: '',
    setuName: () => {},
    password: "",
    setPassword: () => {},
    cart:{},
    setCart:() =>{},
    source: {},
    setSource: () => {},
    login:{},
    setLogin:() =>{},
    search:{},
    setSearch:()=>{},
})

export default userContext