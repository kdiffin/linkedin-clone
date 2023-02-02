import React from "react";
import "./css-files/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { BusinessCenter } from "@mui/icons-material";
import { Chat } from "@mui/icons-material";
import { Notifications } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { firebaseAuth } from "../firebase";
import { logout, selectUser } from "../features/userSlice";

function Header() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  function logoutOfApp() {
    dispatch(logout());
    firebaseAuth.signOut();
  }

  return (
    <div className="header">
      {" "}
      <div className="header__left">
        <img
          src="https://www.renlearn.co.uk/wp-content/uploads/2020/04/LinkedIn-Logo.png"
          alt="linjedln"
        />

        <div className="header__search">
          <SearchIcon /> <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Chat" Icon={Chat} />
        <HeaderOption title="Jobs" Icon={BusinessCenter} />
        <HeaderOption title="Notifications" Icon={Notifications} />
        <HeaderOption
          onClick={logoutOfApp}
          title="me"
          avatar={
            user?.photoURL ??
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpics.me.me%2Fthumb_my-new-pfp-for-my-google-account-71732136.png&f=1&nofb=1&ipt=d6ee5d96b3ec98cf8b96bb3515810d78d9d1e185136dec5d1c4a1c5f39c6f048&ipo=images"
          }
        />
      </div>
    </div>
  );
}

export default Header;
