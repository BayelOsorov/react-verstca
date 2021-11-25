import React from "react";
import phone from "../../images/phone.svg";
import exit from "../../images/exit.svg";
import logo from "../../images/logo.svg";
import cart from "../../images/bx_bx-cart.svg";
import search from "../../images/icon_search.svg";
import "../Header/Header.css";

const Header = () => {
  return (
    <div>
      <div className="main-header">
        <div className="header container">
          <div className="header-left">
            <img src={phone} alt="" />
            <span>8 (812) 123-45-67 |</span>
            <span>Работаем 7 дней в неделю |</span>
            <span> 9:00 — 18:00 </span>
          </div>
          <div className="header-right">
            <img src={exit} alt="" />
            <a href="#">
              <span>Войти/</span>
            </a>
            <a href="#">
              <span>Регистрация</span>
            </a>
          </div>
        </div>
      </div>

      <div className="main-navbar">
        <div className="navbar container">
          <div className="navbar-left">
            <img src={logo} alt="" />
          </div>
          <div className="navbar-right">
            <a href="#">Понравилось</a>
            <a href="#">личный кабинет</a>
            <a href="#">настройки</a>
            <img src={cart} alt="" />
            <img src={search} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
