"use client";

import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

const initaialState = { from: undefined, to: undefined };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initaialState);
  const resetRange = () => setRange(initaialState);
  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);

  if (context === undefined) throw new Error("Context use outside provider");

  return context;
}

export { ReservationProvider, useReservation };
