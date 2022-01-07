import React, { useState } from "react";
import { Nav } from "./components";
import { MainSection } from "./containers";
import { AppContext } from "./AppContext";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [number, setNumber] = useState(0);
  const [numberInCart, setNumberInCart] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className={isOpen ? "app--active" : "app"}>
      <AppContext.Provider
        value={{
          isOpen,
          setIsOpen,
          number,
          setNumber,
          numberInCart,
          setNumberInCart,
          openModal,
          setOpenModal,
          isCartOpen,
          setIsCartOpen,
        }}
      >
        <Nav />
        <MainSection />
      </AppContext.Provider>
    </div>
  );
}

export default App;
