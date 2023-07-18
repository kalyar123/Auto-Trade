import React, { createContext, useState,useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode'; 
import { useHistory  } from 'react-router-dom';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    token: null,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [cart, setCart] = useState([]);
  let history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        setAuthState({ isAuthenticated: false, token: null });
        localStorage.removeItem('token');
      } else {
        setAuthState({ isAuthenticated: true, token: token });
        
      }
    } else {
      setAuthState({ isAuthenticated: false, token: null });
    }
  }, []);
  const login = async (email,password) => {
   await axios.post("http://localhost:5000/api/authUser/login",{email,password})
     .then(res => { 
      localStorage.setItem('token',res.data.token );
      setSuccess('User login Successfully')
      setAuthState({ isAuthenticated: true, token: res.data.token });
      setTimeout(()=>{
        setSuccess('');
        history.push('/');
      },3000)
     
     }).catch(error => {
        console.log("error",error);
        setError('Invalid username or password.');
        setTimeout(()=>{
          setError('');
        },3000)       
      });
     
  };

function addToCart(newItem) {
  const existingItem = cart.find((item) => item.Id === newItem.Id);
  if (existingItem) {
    const updatedCart = cart.map((item) => {
      if (item.Id === existingItem.Id) {
        return {
          ...item,
          count: item.count + 1,
          Price:item.Price,
          totalPrice: item.Price + newItem.Price,
        };
      }
      return item;
    });
    setCart(updatedCart);
  } else {
    const newCart = [...cart, { ...newItem, count: 1, Price: newItem.Price,totalPrice:newItem.Price }];
    setCart(newCart);
  }
}

  const totalCount = cart.reduce((acc, item) => acc + item.count, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);
   
  function removeFromCart(itemToRemove) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.Id === itemToRemove.Id);
      if (existingItem) {
        if (existingItem.count > 1) {
          return prevCart.map((item) => {
            if (item.Id === existingItem.Id) {
              return {
                ...item,
                count: item.count - 1,
                totalPrice: item.totalPrice - item.Price,
              };
            }
            return item;
          });
        } else {
          return prevCart.filter((item) => item.Id !== itemToRemove.Id);
        }
      }
      return prevCart;
    });
  }
  
  const logout = () => {
    setAuthState({ isAuthenticated: false, token: null });
    localStorage.setItem('token','');
  };
  // Pass the authentication state and functions to the context provider
  return (
    <AuthContext.Provider value={{ authState,error,success,cart,totalCount,totalPrice,setCart,login, logout,addToCart,removeFromCart}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
