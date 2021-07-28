import { Link } from "react-router-dom";
import "./topbar.css";

function TopBar(props) {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/" >Menu Principal</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/" >Acerca de</Link>
                    </li>
                    <li className="topListItem"><Link className="link" to="/" >Contactos</Link></li>
                    <li className="topListItem"><Link className="link" to="/write" >Escribir</Link></li>
                    <li className="topListItem">
                        {user && "Cerrar sesion"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className="topImg" src="https://scontent.fctg2-1.fna.fbcdn.net/v/t1.6435-9/53881480_10211482749825012_4090560688462757888_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-xDXwiiDVSEAX9fMYYZ&_nc_ht=scontent.fctg2-1.fna&oh=0aec279cf4b9e00802a13fd41e818073&oe=6121F516">
               
                </img>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                            <Link className="link" to="/login" >
                            Acceso
                            </Link>
                            </li>
                            <li className="topListItem">
                        <Link className="link" to="/register" >
                            Registro
                            </Link>
                            </li>
                        </ul>
                    )
                }
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}

export default TopBar;