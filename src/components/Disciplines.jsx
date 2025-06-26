import "./Disciplines.css";
import countriesData from "../../json/db.json";
import { Link } from "react-router-dom";

export const Disciplines = () => {
  //   const allDisciplines = countriesData.countries.flatMap((country) => country.disciplines)

  return (
    <div className="disciplines">
      <div className="title">
        <span>Disciplines</span>
      </div>
      <div className="groupBtnDisciplines">
        {countriesData.disciplinespage.map((disc) => {
          const id = disc.name.toLowerCase().replace(/\s+/g, "-");
          return (
            <Link to={`/disciplines/${id}`} key={disc.name}>
              <div className="itemBtn">
                <div className="imgDisc">
                  <img src={`/${disc.image}`} alt="img" />
                </div>
                <div className="nameDisc">
                  <span>{disc.name}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Disciplines;
