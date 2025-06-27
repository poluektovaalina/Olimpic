import "./DisciplinesCountry.css";
import countriesData from "../../json/db.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const DisciplinesCountry = () => {
  const { countryId, disciplinesID } = useParams();
  const [country, setCountry] = useState(null);

  function generateId(name) {
    return name.toLowerCase().replace(/\s+/g, "-");
  }

  useEffect(() => {
    const foundCountry = countriesData.countries.find(
      (c) => generateId(c.name) === countryId
    );
    setCountry(foundCountry);
  }, [countryId]);

  if (!country) {
    return (
      <div className="container">
        <span>Loading disciplines data...</span>
      </div>
    );
  }

  const discipline = country.disciplines.find(
    (d) => generateId(d.name) === generateId(disciplinesID)
  );

  if (!discipline) {
    return (
      <div className="containerNoMedals">
        <span>Discipline not found for this country.</span>
      </div>
    );
  }

  const total =
    (discipline.gold || 0) +
    (discipline.silver || 0) +
    (discipline.bronze || 0);

  return (
    <div className="DisciplinesCountry">
            <div className="groupNameIvo">
              <div className="title">
                <span>{discipline.name}</span>
              </div>
              <div className="ico">
                <img src={`/${discipline.image}`} alt="" />
              </div>
              <div className="titleCountry">
                <span>{country.name}</span>
              </div>
            </div>
            <div className="tableMedals">
              <div className="itemMedal">
                <span>GOLD</span>
                <span>{discipline.gold}</span>
              </div>
              <div className="itemMedal">
                <span>SILVER</span>
                <span>{discipline.silver}</span>
              </div>
              <div className="itemMedal">
                <span>BRONZE</span>
                <span>{discipline.bronze}</span>
              </div>
              <div className="itemMedal">
                <span>TOTAL</span>
                <span>{total}</span>
              </div>
            </div>
    </div>
  );
};

export default DisciplinesCountry;
