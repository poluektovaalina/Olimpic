import "./CountriesDisc.css";
import { useParams } from "react-router-dom";
import countriesData from "../../json/db.json";

export const CountriesDisc = () => {
  const { countryID, medalType } = useParams();

  function generateId(name) {
    return name.toLowerCase().replace(/\s+/g, "-");
  }

  const country = countriesData.countries.find(
    (c) => generateId(c.name) === countryID
  );

  if (!country) {
    return <div className="container">Country not found</div>;
  }
  return (
    <div className="countriesDisc">
      <div className="title">
        <span>{country.name}</span>
      </div>
      <div className="flagCountries">
        <img src={`../${country.flag}`} alt="img" />
      </div>
      <div className="fullMedals">
        <span>
          {medalType.charAt(0).toUpperCase() + medalType.slice(1)} Medals
        </span>
        <span>
          {country.disciplines.reduce((sum, d) => sum + (d[medalType] || 0), 0)}
        </span>
      </div>
      <div className="groupDisc">
        <div className="titleName">
          <span>Discipline</span>
          <span>Medals</span>
        </div>
        <div className="qualityDisc">
          {country.disciplines.map((disc) => (
            <div className="itemDisc" key={disc.name}>
              <span>{disc.name}</span>
              <span>{disc[medalType]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountriesDisc;
