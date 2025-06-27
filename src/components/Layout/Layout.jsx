import Header from "../Header/Header";
import "./Layout.css";
import "../../App.css";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const appStyleRoutes = ["/", "/countries", "/disciplines"];

  const isAppStyle = appStyleRoutes.includes(pathname) || /^\/countries\/[^/]+$/.test(pathname)

  const containerClass = isAppStyle ? "app-container" : "layout-container";

  return (
    <div className={containerClass}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
