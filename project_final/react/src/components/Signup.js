// import DefaultHOC from './DefaultHOC'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddUser } from "../store/saga";
import signup from "./signup.svg";
// import allStyles from "./signup.module.css";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const generatePassword = () => {
  // 	const unique_id = uuid();
  // 	console.log(unique_id);
  // 	setPassword(unique_id)
  // 	setShow(true)
  // }
  // console.log("signed up successfully");
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <div className="img">
          <img src={signup} />
        </div>
        <form
          onSubmit={handleSubmit((data) => {
            dispatch({ data, navigate, type: "ADD_USER" });
            reset();
          })}
        >
          <div>
            <h2>Signup</h2>
            <input
              type="text"
              placeholder="name"
              {...register("name", { required: true, maxLength: 20 })}
            />
            {errors.name && "Name is required"}
          </div>
          <div>
            <input
              type="text"
              placeholder="surname"
              {...register("surname", { pattern: /^[A-Za-z]+$/i })}
            />
            {errors.surname && "Surname is required"}
          </div>
          <div>
            <input
              type="text"
              placeholder="username"
              {...register("login", { required: true })}
            />
            {errors.username && "Usename is required"}
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password && "Password is required"}
            <p
              onClick={(e) => {
                setValue("password", e.target.innerText);
                setShow(false);
              }}
            >
              {password}
            </p>
          </div>
          <div>
            <button>Signup</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Signup;
