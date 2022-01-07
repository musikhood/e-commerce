import React, { useState } from "react";
import { Nav } from "./components";
import { MainSection } from "./containers";
import { AppContext } from "./AppContext";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [number, setNumber] = useState(0);
  const [numberInCart, setNumberInCart] = useState(0);
  return (
    <>
      <AppContext.Provider
        value={{
          isOpen,
          setIsOpen,
          number,
          setNumber,
          numberInCart,
          setNumberInCart,
        }}
      >
        <Nav />
        <MainSection />
      </AppContext.Provider>
    </>
  );
}

export default App;
