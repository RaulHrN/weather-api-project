import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "@mui/material";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link href="/" underline="none" className="logo">
          <img src={logo} alt="Climatik" />
        <h1>Climatik</h1>
        </Link>
      </div>

      <div className="search_bar">
        <input type="text" placeholder="Search location..." />
        <button>
          <SearchIcon className="search_icon"/>
        </button>
      </div>

      <nav className="nav_bar">
        <Link href="/" underline="none">
          Home
        </Link>
        <Link href="/hourly" underline="none">
          Hourly
        </Link>
        <Link href="/daily" underline="none">
          Daily
        </Link>
      </nav>
    </header>
  );
};
