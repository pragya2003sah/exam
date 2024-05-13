import React from "react";

function Demo() {
  return (
    <div className="flex justify-center items-center fixed ml-96 mt-44 w-2/5  ">
      <div className="bg-white  rounded-xl w-2/3">
        <img
          src="./examify.png"
          alt=""
          className="h-20 p-2 mt-10 ml-12 mr-12"
        />
        <div flex>
          <button className="bg-blue-700 mr-12 ml-6 mt-7 mb-7 rounded-md p-2 text-white">
            Try for free
          </button>
          <button className="shadow-2xl border-2 bg-white  p-2 rounded-md">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Demo;
