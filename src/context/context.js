import { useContext, createContext, useEffect, useState } from "react";
import React from "react";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
const Context = createContext();

export const ContextProvider = ({ children }) => {
  return <Context.Provider>{children}</Context.Provider>;
};

export const useGlobalContext = () => {
  return useContext(Context);
};
