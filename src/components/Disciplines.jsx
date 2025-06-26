import "./Disciplines.css";
import countriesData from "../../json/db.json";


export const Disciplines = () => {
//   const allDisciplines = countriesData.countries.flatMap((country) => country.disciplines)

  return (
    <div className="disciplines">
      <div className="title">
        <span>Disciplines</span>
      </div>
      <div className="groupBtnDisciplines">
        {countriesData.disciplinespage.map((disc) => (
          <div className="itemBtn" key={disc.name}>
            <div className="imgDisc">
              <img src={`/${disc.image}`} alt="" />
            </div>
            <div className="nameDisc">
              <span>{disc.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Disciplines;
