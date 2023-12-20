import React, { useState, createContext } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config';


export const WalmartContext = createContext();

export const WalmartProvider = ({ children }) => {
  const [dataInfo, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const postData = async ({fullName, goods, price, cards, products}) => {
    setIsLoading(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
     console.log("fullName", fullName, "goods", goods, "price", price, "cards", cards, "products", products);
    try {
      const response = await axios.post(
        `${BASE_URL}/walmart`,
        {
          fullName,
          goods,
          price,
          cards,
          products,
        },
        requestOptions
      );

      if (response.data) {
        let dataInfo = response.data;
        setData(dataInfo);
      }
    } catch (err) {
      console.error("Error posting data to Walmart:", err);
      setData({});
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <WalmartContext.Provider value={{ isLoading, dataInfo, postData }}>
      {children}
    </WalmartContext.Provider>
  );
};