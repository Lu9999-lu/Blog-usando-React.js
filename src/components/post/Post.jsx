
import "./post.css"


export default function Post(){
    return(
        <div className="post">
            <img className="postImg" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/billie-eilish-nuevo-disco-1619599355.jpg?crop=1.00xw:0.916xh;0,0.0843xh&resize=640:*" alt="" />

            <div className="postInfo">
                <div className="PostCast">
                    <span className="postCat">Musica</span>
                    <span className="postCat">Vida</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet 
                </span>
                <hr/>
                <span className="postDate">hace 1 hora</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam similique recusandae dolorum, ducimus reiciendis ipsam odit, perspiciatis porro adipisci voluptas est voluptatum sunt fugit ad velit aspernatur totam alias.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam similique recusandae dolorum, ducimus reiciendis ipsam odit, perspiciatis porro adipisci voluptas est voluptatum sunt fugit ad velit aspernatur totam alias.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam similique recusandae dolorum, ducimus reiciendis ipsam odit, perspiciatis porro adipisci voluptas est voluptatum sunt fugit ad velit aspernatur totam alias.
            </p>
        </div>
    )
}