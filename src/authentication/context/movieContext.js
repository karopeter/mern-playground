import React, { useState, createContext } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config';

export const MovieContext = createContext();

export const MovieProvider = ({ children}) => {
    const [movieInfo, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const bookMovie = async ({fullName, title, genre, booking, status}) => {
       setIsLoading(true);
       const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json"},       
    }
    console.log("fullName", fullName, "title", title, "genre", genre, "booking", booking, "status", status);
    try {
     const response = await axios.post(
      `${BASE_URL}/movies`,
      {
      fullName,
      title,
      genre,
      booking,
      status
      },
      requestOptions
     );

     if (response.data) {
        let movieInfo = response.data;
         setMovie(movieInfo);
     }
    } catch(err) {
      console.error("Error Posting Data to Movies:", err);
      setMovie({});
    } finally {
      setIsLoading(false);
    }
  };
    return (
      <MovieContext.Provider value={{ isLoading, movieInfo, bookMovie}}>
        {children}
      </MovieContext.Provider>
    );
}