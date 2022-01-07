import React, { useState } from "react";
import { Nav } from "./components";
import { MainSection } from "./containers";
import { AppContext } from "./AppContext";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <AppContext.Provider value={{ isOpen, setIsOpen }}>
        <Nav />
        <MainSection />
      </AppContext.Provider>
    </>
  );
}

export default App;
