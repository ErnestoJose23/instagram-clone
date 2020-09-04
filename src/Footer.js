import React from "react";
import "./Footer.css";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Avatar from "@material-ui/core/Avatar";

function Footer({ user, setOpenStore }) {
  return (
    <div className="footer">
      <IconButton>
        <HomeIcon />
      </IconButton>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <IconButton onClick={() => setOpenStore(true)}>
        <AddCircleOutlineIcon />
      </IconButton>
      <IconButton>
        <FavoriteBorderIcon />
      </IconButton>
      <IconButton>
        <Avatar className="avatarFooter" alt="Yet" src="" />
      </IconButton>
    </div>
  );
}

export default Footer;
