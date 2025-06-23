import { useState, useEffect } from "react";
import "../components/Countries.css";
import logoOlimpic from "../../images/logo-white.png";
import icoPrev from "../../images/ico-prev.svg";
import { CountriesPage } from "./CountriesPage";

export function Countries({ goBack }) {
  const [countriesPageState, setCountriesPageState] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("../../json/db.json")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.countries);
      })
      .catch((error) => console.error("Ошибка при загрузке стран:", error));
  }, []);

  if (countriesPageState && selectedCountry) {
    return (
      <CountriesPage
        goBack={() => setCountriesPageState(false)}
        country={selectedCountry}
      />
    );
  }

  return (
    <>
      {countriesPageState ? (
        <CountriesPage goBack={() => setCountriesPageState(false)} />
      ) : (
        <div className="container">
          <div className="countries">
            <div className="header">
              <div onClick={goBack} className="prev_btn">
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
              {countries.map((country, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedCountry(country);
                    setCountriesPageState(true);
                  }}
                  className="btn"
                >
                  <div className="lolo_btn">
                    <img src={country.flag} alt="ico-countries" />
                  </div>
                  <span className="title_btn">{country.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Countries;
