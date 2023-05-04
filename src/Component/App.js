import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Shopping from "./Shopping";
import '../style/app.css'

export const Order = createContext();

function App() {
  let [orderTotal, setOrderTotal] = useState(0);

  function addToTotal(quantity, itemCost) {
    setOrderTotal(orderTotal + quantity * itemCost);
  }

  return (
    <>
    <BrowserRouter>
    <Order.Provider value={{orderTotal, addToTotal}}>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shopping" element={<Shopping/>}></Route>
      </Routes>
    </Order.Provider>
    </BrowserRouter>
    </>
  );
};

export default App;