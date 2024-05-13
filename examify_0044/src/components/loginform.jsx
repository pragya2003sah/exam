import React, { useState } from "react";
import "./loginValidation";
import validation from "./loginValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Loginform() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  axios.defaults.withCredentials = true;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => navigate("/"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="flex justify-center items-center fixed ml-96 mt-36 w-1/3">
        <div className="bg-white p-8 rounded-xl w-68">
          <img src="./examify.png" alt="" className="h-12 ml-16 mr-20 mt-4" />
          <h1 className="font-bold ml-32 text-xl">Login</h1>

          <form action="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="ml-12 font-bold">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleInput}
                class=" border border-gray-800  text-sm rounded-3xl  block w-9/12 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-8 mr-8"
              />
              {errors.email && (
                <span className="text-red-800 p-4 mb-4 ml-8">
                  {errors.email}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="password" className="ml-12 font-bold">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleInput}
                class=" border border-gray-800  text-sm rounded-3xl  block w-9/12 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-8 mr-8"
              />
              {errors.password && (
                <span className="text-red-800 p-4 mb-4 ml-8">
                  {errors.password}
                </span>
              )}
            </div>
            <button
              type="submit"
              class="text-black border-2 border-blue-700 rounded-2xl focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-28 mt-4"
            >
              Log In
            </button>
          </form>

          <div className="ml-12 font-bold mb-4">
            <h1>Forgot password</h1>
            <h1>
              Dont have account?
              <a href="./register" className="text-blue-600">
                Sign up
              </a>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginform;
