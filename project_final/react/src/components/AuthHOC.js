import { Link, Outlet } from "react-router-dom";
import { AppBar, Button, CssBaseline, List, Stack, Toolbar, Typography } from "@mui/material";


const Auth = () => {

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
          <Link to='/profile' style={{ color: 'white', textDecoration: 'none', fontSize: '25px'}}>Home </Link>
          <Link to="/books" style={{ color: 'white', textDecoration: 'none', fontSize: '25px'}}>Books</Link>
          <Link to="/settings"  style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}>Settings</Link>
          <Link to="/logout" style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}>Log out</Link>
        </Stack>


      </Toolbar>

    </AppBar>
    <br />
    < Outlet />
    
 </>
}

export default Auth;