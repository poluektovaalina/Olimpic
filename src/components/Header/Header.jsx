import logoOlimpic from "../../../images/logo-white.png";
import icoPrev from "../../../images/ico-prev.svg";
import { useHref, useNavigate } from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {
  const href = useHref();
  const navigate = useNavigate();

  const goBack = () => {
   navigate(-1)
  }

  if (href === "/") return;

  return (
    <div className={styles.header}>
      <div className={styles.prev_btn} onClick={goBack}>
         <img src={icoPrev} alt="img" />
      </div>
      <div className={styles.logo}>
        <img src={logoOlimpic} alt="img" />
      </div>
    </div>
  );
};

export default Header;
