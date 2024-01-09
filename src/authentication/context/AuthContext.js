import React, { useState, createContext } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
      const [userInfo, setUserInfo] = useState({});
      const [isLoading, setIsLoading] = useState(false);

      const register = async ({firstName, lastName, email, password}) => {
        setIsLoading(true);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'}
        }
        // console.log("firstName", firstName, "lastName", lastName, "email", email, "password", password);
        try {
          const response = await axios.post(`${BASE_URL}/user/signup`, {
            firstName,
            lastName,
            email,
            password
          }, requestOptions);
          if (response.data) {
            let userInfo = response.data;
            setUserInfo(userInfo);
          } else {
            // console.error('Response data is  missing or empty!!');
            setIsLoading(false);
          }
        } catch(error) {
          // console.error("register error", error);
          setIsLoading(false);
        }
      }

      const login =  (email, password) => {
         setIsLoading(true);
         const requestOptions = {
             method: 'POST', 
             headers: {'Content-Type': 'application/json'}
         }
        //  console.log("email", email, "password", password);
         axios.post(`${BASE_URL}/user/login`, {
            email,
            password
         }, requestOptions).then(res => {
          let userInfo = res.data;
          setUserInfo(userInfo);
          setIsLoading(false);
         }).catch(error => {
          // console.log(`login error: ${error.response.data}`);
          setIsLoading(false);
         });
      }
    return (
      <AuthContext.Provider value={{ isLoading, userInfo, register, login}}>
         { children }
      </AuthContext.Provider>
    );
}