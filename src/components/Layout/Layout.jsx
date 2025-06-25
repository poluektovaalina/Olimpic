import Header from "../Header/Header";
import "./Layout.css"

const Layout = ({children}) => {
 return(
    <div className="container">
        <Header />
        {children}
    </div>
 )
}

export default Layout;  