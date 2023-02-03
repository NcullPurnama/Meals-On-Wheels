import Footer from "../Footer/Footer";
import NavBar from "../Header/Header";
import "bootswatch/dist/materia/bootstrap.min.css";

import "./Layout.css";

const Layout = (props) => {
    return (
        <div className="layout">
            <NavBar className="navbar" />
            <div className="content">
                {props.children}
            </div>
            <Footer className="footer" />
        </div>
    );
}

export default Layout;