import "./sidebar.css"

export default function Sidebar() {
    return(
        <div className="sidebar">
           <div className="sidebarItem">
               <span className="sidebarTitle">SOBRE MI</span>
               <img className="sidebarImg" src="https://imagenes.elpais.com/resizer/0vAYuSjwKL3junMbM6keWC7cpLs=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/E3VWLTSMOFEPZES5S54JBLVKGI.jpg" alt="" />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aut ad quisquam repellat, odit alias iste optio.</p>
           </div>
           <div className="sidebarItem">
           <span className="sidebarTitle">Categorias</span>
           <ul className="sidebarList">
               <li className="sidebarListItem">Musica</li>
               <li className="sidebarListItem">Farndula</li>
               <li className="sidebarListItem">Creadores</li>
               <li className="sidebarListItem">Moda</li>
               <li className="sidebarListItem">Cinema</li>
               <li className="sidebarListItem">Tendencias</li>
           </ul>
           </div>
           <div className="sidebarItem">
           <span className="sidebarTitle">Síguenos</span>
           <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
           </div>
           </div>
        </div>
    )
}
