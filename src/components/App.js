import React, { createContext, useState } from "react";
import "../styles/App.css";
import { UserProfile } from "./UserProfile";

const UserContext = createContext();

const App = () => {
  const [data, setData] = useState({ name: "Newton", age: 3 });

  return (
    <div id="main">
      <UserContext.Provider value={{ data, setData }}>
        <UserProfile />
      </UserContext.Provider>
    </div>
  );
};

export default App;
export { UserContext };
