import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import allStyles from "./login.module.css";
import login from './login.svg';
import images from './images.jpg'
import { Link, Outlet } from 'react-router-dom'


const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginError = useSelector(state => state.Auth.loginError)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  return <>
    {/* <div className="heading">
      <img src={images}/>
    </div> */}
    <p>{loginError}</p>
    <div className="container">
      <div className="img">
        <img src={login} />
      </div>
      <form   onSubmit={handleSubmit((data) => {
        // console.log(data)
        dispatch({ type: "LOGIN_USER", navigate, data })
      })}>
        <div>
          <h2>Login</h2>
          <input type="text" placeholder="username" {...register("username")} />
        </div>
        <div>
          <input type="password" placeholder="password" {...register("password")} />
        </div>
        <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
        <div>
          <button>Log in</button>
        </div>
      </form>
    </div>
  </>
}

export default Login 