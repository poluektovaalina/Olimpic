import { useState } from "react";
import '../components/Countries.css'
import logoOlimpic from "../../images/logo-white.png";
import icoPrev from "../../images/ico-prev.svg";
import icoUSA from "../../images/flags/USA.png";
import icoChina from "../../images/flags/China.png";
import icoJapan from "../../images/flags/Japan.png";
import icoGermany from "../../images/flags/Germany.png";
import icoAustralia from "../../images/flags/Australia.png";
import icoRussia from "../../images/flags/Russia.png";
import icoUnitedKingdom from "../../images/flags/UnitedKingdom.png";
import icoFrance from "../../images/flags/France.png";
export function Countries() {
  return (
    <>
      <div className="container">
        <div className="countries">
          <div className="header">
            <div className="prev_btn">
              <img src={icoPrev} alt="" />
            </div>
            <div className="logo">
              <img src={logoOlimpic} alt="" />
            </div>
          </div>
          <div className="title">
            <span>Countries</span>
          </div>
          <div className="group_countries">
            <button className="btn">
              <div className="lolo_btn">
                <img src={icoUSA} alt="ico-countries" />
              </div>
              <span className="title_btn">USA</span>
            </button>
            <button className="btn">
              <div className="lolo_btn">
                <img src={icoChina} alt="ico-countries" />
              </div>
              <span className="title_btn">China</span>
            </button>
            <button className="btn">
              <div className="lolo_btn">
                <img src={icoJapan} alt="ico-countries" />
              </div>
              <span className="title_btn">Japan</span>
            </button>
            <button className="btn">
              <div className="lolo_btn">
                <img src={icoGermany} alt="ico-countries" />
              </div>
              <span className="title_btn">Germany</span>
            </button>
            <button className="btn">
              <div className="lolo_btn">
                <img src={icoAustralia} alt="ico-countries" />
              </div>
              <span className="title_btn">Australia</span>
            </button>
            <button className="btn">
              <div className="lolo_btn">
                <img src={icoRussia} alt="ico-countries" />
              </div>
              <span className="title_btn">Russia</span>
            </button>
            <button className="btn">
              <div className="lolo_btn">
                <img src={icoUnitedKingdom} alt="ico-countries" />
              </div>
              <span className="title_btn">United Kingdom</span>
            </button>
            <button className="btn">
              <div className="lolo_btn">
                <img src={icoFrance} alt="ico-countries" />
              </div>
              <span className="title_btn">France</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Countries;
