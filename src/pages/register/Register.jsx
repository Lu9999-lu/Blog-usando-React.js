import { Link } from "react-router-dom"
import "./register.css"


export default function register(){
    return(
        <div className="register">
            <span className="registerTitle">Registro</span>
            <form action="" className="registerForm">
                <label >Nombre de usuario</label>
                <input  type="text" className="registerInput" placeholder="Ingresar nombre de usuario..." />
                

                <label >Correo electronico</label>
                <input  type="text" className="registerInput" placeholder="Ingresar email..." />
                <label >Contraseña</label>
                <input  type="password" className="registerInput" placeholder="Ingresar contraseña..." />
            <button className="registerButton">Registrar</button>
            </form>
      
            <button className="registerLoginButton">  <Link className="link" to="/login">Acceso</Link></button>
        </div>

    )
}