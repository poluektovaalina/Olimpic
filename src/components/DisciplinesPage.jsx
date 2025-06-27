import "../components/DisciplinesPage.css";
import countriesData from "../../json/db.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const DisciplinesPage = () => {
  const { disciplinesID } = useParams();
  const [disc, setDisc] = useState(null);

  function generateId(name) {
    return name.toLowerCase().replace(/\s+/g, "-");
  }

  const allDisciplines = countriesData.countries.flatMap(
    (country) => country.disciplines
  );

  useEffect(() => {
    const foundDisc = allDisciplines.find(
      (d) => generateId(d.name) === disciplinesID
    );
    setDisc(foundDisc);
  }, [disciplinesID]);

  if (!disc) {
    return (
      <div className="container">
        <span>Loading disciplines data...</span>
      </div>
    );
  }

  const id = generateId(disc.name);
  return (
    <div className="disciplinesPage">
      <div className="groupNameIco">
        <div className="title" key={disc.id}>
          <span>{disc.name}</span>
        </div>
        <div className="icoDisc">
          <img src={`/${disc.image}`} alt="img" />
        </div>
      </div>

      <div className="groupTable">
        <div className="nameTable">
          <span>Country</span>
          <span>Medals</span>
        </div>

        <div className="dataTable">
          {countriesData.countries.map((country) => {
            const discipline = country.disciplines.find(
              (d) => generateId(d.name) === disciplinesID
            );
            const countryID = generateId(country.name);
            const total =
              (discipline?.gold || 0) +
              (discipline?.silver || 0) +
              (discipline?.bronze || 0);
            return (
              <div className="itemData" key={country.name}>
                <Link to={`/disciplines/${id}/${countryID}`}>
                  <span>{country.name}</span>
                </Link>
                <span>{total}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DisciplinesPage;
