import React from "react";
import Theme from "/src/Components/User/Themes/Theme.jsx";
import Setting from "/src/Components/User/Settings/Setting.jsx";
import { useContext } from "react";
import { userContext } from "../ZyraAIAssist";

function User() {
  let {bgTheme,setbgTheme}=useContext(userContext);
  
  return (
    <>
    <div className={`flex flex-col items-center space-y-5 pt-10 ${bgTheme} h-screen`}>
      <div>
        <Theme />
      </div>
      <div className="">
        <Setting />
      </div>
     
     </div>
    </>
  );
}

export default User;
