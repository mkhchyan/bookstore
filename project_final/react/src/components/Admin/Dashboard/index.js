import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector(state => state.Auth.profile);
  
  return <>
    {/* <h1>THIS IS PROFILE</h1> */}
    {user && <h2>{user.name} {user.surname}</h2>}
  </>
}

export default Dashboard;