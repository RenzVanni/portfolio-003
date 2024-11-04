import { useState } from "react";
import Header from "./components/Header";
import Leftside from "./layout/Leftside";
import Rightside from "./layout/Rightside";

const App = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isContact, setIsContact] = useState(false);

  return (
    <div
      className={`relative ${
        isContact && "h-screen"
      } bg-main min-w-[300px] overflow-y-scroll md:h-screen flex flex-col`}
    >
      <Header
        setIsMenu={setIsMenu}
        isMenu={isMenu}
        setIsContact={setIsContact}
      />
      <div className="flex-1 h-full p-4 space-y-4 items-center justify-center md:flex md:p-8 md:space-x-8 lg:px-36 md:space-y-0 overflow-y-scroll">
        <Leftside />
        <Rightside isContact={isContact} />
      </div>
      <div className="block md:hidden bg-gradient-to-t from-main to-transparent h-32 fixed bottom-0 right-0 left-0"></div>
    </div>
  );
};

export default App;
