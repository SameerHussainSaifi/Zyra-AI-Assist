import React from "react";
import Theme from "/src/Components/User/Themes/Theme.jsx";
import Setting from "/src/Components/User/Settings/Setting.jsx";
function User() {
  return (
    <>
    <div className='flex flex-col items-center space-y-5 pt-10'>
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
