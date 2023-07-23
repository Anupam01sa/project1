import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setproducts] = useState([]);
  
  const getProducts = async () => {
   try{
      const res = await axios.get("http://localhost:8800/");
      
      setproducts (res.data);
      
    } catch (error) {
      console.log("error")
       };
  };

  // my 2nd api call for single product
  const [singleproducts, setsingleproducts] = useState([]);
  const getSingleProduct = async () => {
    
    try {
      const res = await axios.get("http://localhost:8800/");
       setsingleproducts(res.data);
      
    } catch (error) {
      console.log("error");
      };
    
  };

  useEffect(() => {
    getProducts();
  }, [])
  console.log(products);


  return (
    <AppContext.Provider value={{ ...products,...singleproducts, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
