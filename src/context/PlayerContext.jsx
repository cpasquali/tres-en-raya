import { useState, createContext } from "react";

export const PlayerContext = createContext();

export const PlayerContextProvider = ({ children }) => {
  const [player, setPlayer] = useState("X");

  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};
