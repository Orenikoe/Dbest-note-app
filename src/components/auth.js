import { useState, createContext} from "react-router-dom";
import React from "react";

const authContext = createContext(null);

export const AuthProvider = ({ Children }) => {
const [userAuth, setUserAuth] = useState(null)

const login = () => {setUserAuth(userAuth)};
const logout = () => {setUserAuth(null)};


return (
<authContext.Provider value={{userAuth, login, logout}}>{ Children }</authContext.Provider>
)
 }







