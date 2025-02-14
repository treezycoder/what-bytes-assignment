"use client";

import { defaultScores } from "@/data/placeholder";
import { Scores } from "@/types/context";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface GlobalStateType {
  scores: Scores;
  setScores: React.Dispatch<React.SetStateAction<Scores>>;
  showUpdateForm: boolean;
  setShowUpdateForm: React.Dispatch<React.SetStateAction<boolean>>;
  showMobileNav: boolean;
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalStateContext = createContext<GlobalStateType | undefined>(
  undefined
);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [showUpdateForm, setShowUpdateForm] = useState<boolean>(false);
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const [scores, setScores] = useState<Scores>(defaultScores);

  const value = {
    scores,
    setScores,
    showUpdateForm,
    setShowUpdateForm,
    showMobileNav,
    setShowMobileNav,
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = (): GlobalStateType => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalProvider");
  }
  return context;
};
