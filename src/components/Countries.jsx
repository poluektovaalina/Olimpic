import { Link } from "react-router-dom";
import countriesData from "../../json/db.json";
import "../components/Countries.css";


export function Countries() {
  return (
    <div className="countries">
      <div className="title">
        <span>Countries</span>
      </div>
      <div className="group_countries">
        {countriesData.countries.map((country) => {
          const id = country.name.toLowerCase().replace(/\s+/g, "-");
          return (
            <Link key={id} to={`/countries/${id}`}>
              <button className="btn">
                <div className="lolo_btn">
                  <img src={country.flag} alt="ico-countries" />
                </div>
                <span className="title_btn">{country.name}</span>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Countries;
