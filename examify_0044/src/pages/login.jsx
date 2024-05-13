import React from "react";
import Loginform from "../components/loginform";
function Login() {
  return (
    <>
      <div className="w-full h-screen flex">
        <div className="w-2/5 h-screen">
          <div className="h-1/3 w-full bg-cover bg-center bg-no-repeat bg-[url('C:\Users\user\OneDrive\Desktop\examify\examify_0044\src\assets\image1.png')]"></div>
          <div className="h-1/3 w-full bg-cover bg-centerbg-no-repeat bg-[url('C:\Users\user\OneDrive\Desktop\examify\examify_0044\src\assets\image2.png')]"></div>
          <div className="h-1/3 w-full bg-cover bg-center bg-no-repeat bg-[url('C:\Users\user\OneDrive\Desktop\examify\examify_0044\src\assets\image3.png')]"></div>
        </div>
        <Loginform />
        <div className="w-3/5 h-screen">
          <div className="h-1/2 w-full bg-cover bg-center bg-no-repeat bg-[url('C:\Users\user\OneDrive\Desktop\examify\examify_0044\src\assets\image4.png')]"></div>
          <div className="h-1/2 w-full bg-cover bg-center bg-no-repeat bg-[url('C:\Users\user\OneDrive\Desktop\examify\examify_0044\src\assets\image5.png')]"></div>
        </div>
      </div>
    </>
  );
}

export default Login;
