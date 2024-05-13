import React, { useState } from "react";
import validation from "../components/registrationValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [values, setValues] = useState({
    name: "",
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
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/register", values)
        .then((res) => navigate("/"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="font-bold max-w-sm mx-auto">
        <h1 className="ml-20 mt-8 font-bold text-xl ">Sign up</h1>
        <h2 className="">Create your account today</h2>

        <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div class="mb-5">
            <label
              for="name"
              class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleInput}
              class=" border border-gray-800 text-gray-900 text-sm rounded-2xl block w-full p-2 dark:bg-gray-700 dark:border-gray-800 "
            />
            {errors.name && (
              <span className="text-red-800 p-4 mb-4 ml-8">{errors.name}</span>
            )}
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleInput}
              class=" border border-gray-800 text-gray-900 text-sm rounded-2xl block w-full p-2 dark:bg-gray-700 dark:border-gray-800 "
            />
            {errors.email && (
              <span className="text-red-800 p-4 mb-4 ml-8">{errors.email}</span>
            )}
          </div>
          <div class="mb-5">
            <label
              for="password"
              class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleInput}
              class=" border border-gray-800 text-gray-900 text-sm rounded-2xl block w-full p-2 dark:bg-gray-700 dark:border-gray-800 "
            />
            {errors.password && (
              <span className="text-red-800 p-4 mb-4 ml-8">
                {errors.password}
              </span>
            )}
          </div>

          <label
            for="countries"
            class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
          >
            Country
          </label>
          <select
            name="country"
            onChange={handleInput}
            class=" mb-2 border border-gray-800 text-gray-900 text-sm rounded-2xl block w-full p-2"
          >
            <option selected>Select your country</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="France">France</option>
            <option value="germany">Germany</option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Australia">Australia</option>
          </select>
          {errors.country && (
            <span className="text-red-800 p-4 mb-4 ml-8">{errors.country}</span>
          )}
          <div class="mb-5">
            <label
              for="school"
              class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >
              School
            </label>
            <input
              type="text"
              name="school"
              onChange={handleInput}
              class=" border border-gray-800 text-gray-900 text-sm rounded-2xl block w-full p-2 dark:bg-gray-700 dark:border-gray-800 "
            />
            {errors.school && (
              <span className="text-red-800 p-4 mb-4 ml-8">
                {errors.school}
              </span>
            )}
          </div>

          <button
            type="submit"
            class="text-black border-2 border-blue-700 rounded-2xl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-28"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
