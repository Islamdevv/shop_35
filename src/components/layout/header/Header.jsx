import React from "react";
import scss from "./Header.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WorkIcon from "@mui/icons-material/Work";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <h1 className={scss.logo}>LOGO</h1>
          <nav className={scss.nav}>
            <p onClick={() => navigate("/admin")}>Admin</p>
            <p>HOME</p>
            <Link to="/list">
              <p>PRODUCTS</p>
            </Link>
            <p>ABOUT</p>
            <div className={scss.icons}>
              <PersonIcon sx={{ color: "#000" }} />
              <FavoriteIcon />
              <WorkIcon />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
