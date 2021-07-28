import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings(){
    return(
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Actualiza tu cuenta</span>
                    <span className="settingsDelateTitle">Elimina tu cuenta</span>
                </div>
                <form  className="settingsForm">
                    <label >Foto de perfil</label>
                    <div className="settingsPP">
                        <img src="https://scontent.fctg2-1.fna.fbcdn.net/v/t1.6435-9/53881480_10211482749825012_4090560688462757888_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-xDXwiiDVSEAX9fMYYZ&_nc_ht=scontent.fctg2-1.fna&oh=0aec279cf4b9e00802a13fd41e818073&oe=6121F516" alt="" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                        <label>Nombre de usuario</label>
                        <input type="text" placeholder="Luis" />
                        <label >Email</label>
                        <input type="email" placeholder="ruizu9999@gmail.com" />
                        <label >Contraseña</label>
                        <input type="password"  />
                        <button className="settingsSubmit">Actualizar</button>
                        
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}