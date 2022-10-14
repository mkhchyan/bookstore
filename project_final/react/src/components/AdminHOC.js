import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import './default.css'
import { Link, Outlet } from "react-router-dom";
import { AppBar, Button, CssBaseline, List, Stack, Toolbar, Typography } from "@mui/material";
;

//https://www.bezkoder.com/react-hooks-redux-login-registration-example/

const AdminHOC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector(state => state.Auth.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "CHECK_IS_ADMIN", location, navigate })
  }, []);

  // const drawerWidth = 240;

  // const [mobileOpen, setMobileOpen] = React.useState(false);

  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };

  return <>
    <AppBar position="static" style={{justifyContent: "flex-end"}}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4">
          BOOK<i>holic</i>
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Link to='/' style={{ color: 'white', textDecoration: 'none', fontSize: '25px'}}>Home </Link>
          <Link to="/books" style={{ color: 'white', textDecoration: 'none', fontSize: '25px'}}>Books</Link>
          <Link to="/addbook"  style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}>Add Book</Link>
          <Link to="/rent" style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}>Rent</Link>
        </Stack>


      </Toolbar>

    </AppBar>
    <br />
    < Outlet />
  </>
}

export default AdminHOC;