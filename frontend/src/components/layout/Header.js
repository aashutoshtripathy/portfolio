import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, lazy, useState } from "react";
import { orange } from "../../constants/color";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import GroupIcon from "@mui/icons-material/Group";
import NotificationIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
// import Search from "../specific/Search";
// import Notifiactions from "../specific/Notifiactions";
const Search = lazy(() => import("../specific/Search"))
const Notifiactions = lazy(() => import("../specific/Notifiactions"))
const NewGroup = lazy(() => import("../specific/NewGroup"))




const Header = () => {
    const navigate = useNavigate()
    const [IsMobile, setIsMobile] = useState(false)
    const [IsNotification, setIsNotification] = useState(false)
    const [IsSearch, setIsSearch] = useState(false)
    const [IsNewGroup, setIsNewGroup] = useState(false)
    const [IsLogout, setIsLogout] = useState(false)
  const handleMobile = () => {
    setIsMobile((prev) => !prev)
  };
  const openSearch = () => {
    setIsSearch((prev) => !prev)
  };
  const handleNewGroup = () => {
    setIsNewGroup((prev) => !prev)
  };
  const handleNavigateGroup = () => {
    navigate("/chat");
  }
  const handleNotification = () => {
    setIsNotification((prev) => !prev)
  };

  const handleLogout = () => {
    setIsLogout((prev) => !prev)
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                fontSize: 'larger',
                fontWeight: 'bolder',
                display: { xs: "none", sm: "block" },
              }}
            >
              बातचीत
            </Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>

                <IconBtn
                title={"Search"}
                icon={<SearchIcon/>}
                onclick={openSearch}
                />
                <IconBtn
                title={"New Group"}
                icon={<AddIcon/>}
                onclick={handleNewGroup}
                />
                <IconBtn
                title={"Manage Group"}
                icon={<GroupIcon/>}
                onclick={handleNavigateGroup}
                />
                <IconBtn
                title={"Notification"}
                icon={<NotificationIcon/>}
                onclick={handleNotification}
                />
                <IconBtn
                title={"Logout"}
                icon={<LogoutIcon/>}
                onclick={handleLogout}
                />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {IsSearch && (
        <Suspense fallback={<Backdrop open/>}>
            <Search/>
        </Suspense>
      )}
      {IsNotification && (
        <Suspense fallback={<Backdrop open/>}>
            <Notifiactions/>
        </Suspense>
      )}
      {IsNewGroup && (
        <Suspense fallback={<Backdrop open/>}>
            <NewGroup/>
        </Suspense>
      )}
    </>
  );
};


const IconBtn = ({title,icon,onclick}) => {
    return(
        <Tooltip title={title}>
            <IconButton
                color="inherit"
                size="large"
                onClick={onclick}
            >
                {icon}
            </IconButton>
        </Tooltip>
    )
}

export default Header;
