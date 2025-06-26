import "../App.css";
import { Link } from "react-router-dom";
import logoOlimpic from "../../images/logo-white.png";
import banner from "../../images/frame.png";
import icoCountries from "../../images/ico-countries.svg";
import icoDisciplines from "../../images/ico-disciplines.svg";
export function MainPage() {
  return (
    <div className="main">
      <div className="logo">
        <img src={logoOlimpic} alt="" />
      </div>
      <div className="banner">
        <img src={banner} alt="" />
      </div>
      <div className="btn_group">
        <Link to="/countries">
          <button className="btn">
            <div className="lolo_btn">
              <img src={icoCountries} alt="ico-countries" />
            </div>
            <span className="title_btn">Countries</span>
          </button>
        </Link>
        <Link to="/disciplines">
          <button className="btn">
            <div className="lolo_btn">
              <img src={icoDisciplines} alt="ico-countries" />
            </div>
            <span className="title_btn">Disciplines</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
