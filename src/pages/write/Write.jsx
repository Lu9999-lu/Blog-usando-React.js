import "./write.css"

export default function Write(){
    return(
        <div className="write">
            <img
            className="writeImg"
             src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/billie-eilish-nuevo-disco-1619599355.jpg?crop=1.00xw:0.916xh;0,0.0843xh&resize=640:*" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input  type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Titulo" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Cuenta tu historia" type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publicar</button>
            </form>

        </div>
    )
}