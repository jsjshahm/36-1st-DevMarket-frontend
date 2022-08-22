import React from 'react';
import { useState } from 'react';
import './NavBottom.scss';
import Arcodian from './ Arcodian';

function NavBottom({ onClick, changeClassname }) {
  const [input, setInput] = useState(false);
  const getValue = e => setInput(e.target.value);

  return (
    <nav className="navBottomWrap">
      <div className="navLeft">
        <Arcodian onClick={onClick} changeClassname={changeClassname} />
        <ul className="navUl">
          <li className="list">든든배송 &middot; </li>
          <li className="list">상회가만든 &middot; </li>
          <li className="list">샘플신청 &middot; </li>
          <li className="list">기획전 </li>
        </ul>
      </div>
      <div className="navCenter">
        <img
          className="mainLogo"
          src="https://cdn-mart.baemin.com/front-end/assets-static/bmmart_logo_2021@3x.png"
          alt="logo"
        />
      </div>
      <div className="navBottomRight">
        <form className="search">
          {input ? null : <i className="fa-solid fa-magnifying-glass" />}
          <input
            type="search"
            maxLength="50"
            autoComplete="off"
            placeholder="상품명으로 찾아보세요"
            onChange={getValue}
          />
          <div className="naviconWrap">
            <img
              className="navIcon"
              src="/images/Nav/user.png"
              alt="loginImg"
            />
            <p className="navIconTag">나의상회</p>
          </div>
          <div className="naviconWrap">
            <img
              className="navIcon"
              src="/images/Nav/shopping-cart.png"
              alt="loginImg"
            />
            <p className="navIconTag">장바구니</p>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default NavBottom;
