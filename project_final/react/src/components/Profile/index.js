import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useLocation } from "react-router-dom"
import '../default.css'


const Profile = () => {
  // console.log("OOOK")
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector(state => state.Auth.profile);
  // console.log(user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_USER", location, navigate })
  }, []);

  return <>
    {/* <h1>THIS IS PROFILE</h1> */}
    {user && <h2>{user.name} {user.surname}</h2>}

  
    {user.photo ? 
        <img src={"http://localhost:5000/images/" + user.photo} />
      : <p>NO photo yet</p>
    }

    <form onSubmit={e => {
      e.preventDefault()
      let element = document.getElementById('avatar').files
      // console.log(element);
      dispatch({ type: "UPLOAD_PICTURE", file: element[0], navigate })
    }}>
      <input type="file" id="avatar" />
      <button>Upload</button>
    </form>
  </>
}

export default Profile