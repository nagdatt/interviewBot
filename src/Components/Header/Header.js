import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import { Divider, Tooltip } from "@mui/material";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import Avatar from "@mui/material/Avatar";

import { deepOrange } from "@mui/material/colors";

const pages = [
  { name: "OOP", path: "/" },
  { name: "CPP", path: "/cpp" },
  { name: "DBMS", path: "/dbms" },
  { name: "PYTHON", path: "/python" },
  { name: "HR", path: "/hr" },
  { name: "ADD QUESTION", path: "/add" },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlesignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        window.location.reload(false);
      })
      .catch((error) => {});
  };
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        console.log(user.reloadUserInfo.localId);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2021/2021646.png"
              style={{ width: 32, height: 32, marginRight: "10px" }}
            />
            BOT
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ name, path }) => (
              <Link to={path} style={{ textDecoration: "none" }}>
                <Button
                  key={name}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {name}
                </Button>
              </Link>
            ))}

            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Badge badgeContent={"do it !"} color="success">
                <a
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://bit.ly/StriversA2ZDSASheet"
                >
                  Coding
                </a>
              </Badge>
            </Button>
            <Tooltip title="Comming Soon">
            <Button
              
              sx={{ my: 2, display: "block" }}
            
              color="primary"
              variant="outlined"
              
              style={{background:"white",marginLeft: "20px",color:"rgb(25, 118, 210)"}}
            >
              <b>Others </b><i class="bi bi-caret-down-fill"></i>
            </Button>
            </Tooltip>
          </Box>
          {user?.displayName}
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar
                src={user?.photoURL}
                alt={user?.email}
                sx={{ bgcolor: deepOrange[500] }}
                imgProps={user?.photoURL}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disabled>
                <i class="bi bi-sliders" style={{ marginRight: "5px" }}></i>{" "}
                Account Settings
              </MenuItem>
              <Divider />
              <MenuItem onClick={handlesignOut}>
                <i
                  class="bi bi-box-arrow-right "
                  style={{ marginRight: "5px" }}
                ></i>{" "}
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
