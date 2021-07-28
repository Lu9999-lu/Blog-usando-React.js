import { Link } from "react-router-dom"
import "./login.css"


export default function Login(){
    return(
        <div className="login">
            <span className="loginTitle">Acceso</span>
            <form action="" className="loginForm">
                <label >Correo electronico</label>
                <input  type="text" className="loginInput" placeholder="Ingresar email..." />
                <label >Contraseña</label>
                <input  type="password" className="loginInput" placeholder="Ingresar contraseña..." />
            <button className="loginButton">Acceder</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">Registrar</Link>
                </button>
            
        </div>
    )
}