import { useState } from "react";
import "../components/CountriesPage.css";
import logoOlimpic from "../../images/logo-white.png";
import icoPrev from "../../images/ico-prev.svg";
import icoGold from "../../images/medals/gold.png";
import icoSilver from "../../images/medals/silver.png";
import icoBronze from "../../images/medals/bronze.png";

export function CountriesPage({ goBack, country }) {
  if (!country) return null;
  return (
    <>
      <div className="container countries">
        <div className="header">
          <div onClick={goBack} className="prev_btn">
            <img src={icoPrev} alt="" />
          </div>
          <div className="logo">
            <img src={logoOlimpic} alt="" />
          </div>
        </div>
        <div className="title">
          <span>{country.name}</span>
        </div>
        <div className="flagCountries">
          <img src={country.flag} alt="" />
        </div>
        <div className="groupMedals">
          <div className="itemMedals">
            <span className="name">Gold</span>
            <span>{country.medals.gold}</span>
          </div>
          <div className="itemMedals">
            <span className="name">Silver</span>
            <span>{country.medals.silver}</span>
          </div>
          <div className="itemMedals">
            <span className="name">Bronze</span>
            <span>{country.medals.bronze}</span>
          </div>
          <div className="itemMedals">
            <span className="name">Total</span>
            <span>
              {country.medals.gold +
                country.medals.silver +
                country.medals.bronze}
            </span>
          </div>
        </div>
        <div className="groupBtnMedals">
            <button className="btn">
              <div className="lolo_btn">
                <img src={icoGold} alt="" />
              </div>
              <div className="title_btn">
                <span>Medals</span>
              </div>
            </button>
            <button className="btn">
              <div className="lolo_btn">
                <img src={icoSilver} alt="" />
              </div>
              <div className="title_btn">
                <span>Medals</span>
              </div>
            </button>
            <button className="btn">
              <div className="lolo_btn">
                <img src={icoBronze} alt="" />
              </div>
              <div className="title_btn">
                <span>Medals</span>
              </div>
            </button>
        </div>
      </div>
    </>
  );
}

export default CountriesPage;
