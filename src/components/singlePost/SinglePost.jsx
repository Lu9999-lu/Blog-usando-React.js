import "./singlePost.css"

export default function SinglePost(){
    return(
        <div className="singlePost">
           <div className="siglePostWrapper">
               <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/billie-eilish-nuevo-disco-1619599355.jpg?crop=1.00xw:0.916xh;0,0.0843xh&resize=640:*" alt=""  className="singlePostImg"/>


               <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
               <div className="singlePostEdit">
               <i className="singlePostIcon far fa-edit"></i>
               <i className="singlePostIcon far fa-trash-alt"></i>
               </div>
               </h1>
               <div className="singlePostInfo">
                   <span className="SinglePostAuthor">Autor: <b>Luis</b></span>
                   <span className="SinglePostDate">1 hora </span>
               </div>
               <p className="singlePostDesc">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam recusandae nulla, ea odio voluptates adipisci magnam quidem. Est laudantium, ullam nam nisi consequatur odit voluptas impedit eveniet, dolore dolor veniam.
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam recusandae nulla, ea odio voluptates adipisci magnam quidem. Est laudantium, ullam nam nisi consequatur odit voluptas impedit eveniet, dolore dolor veniam.
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam recusandae nulla, ea odio voluptates adipisci magnam quidem. Est laudantium, ullam nam nisi consequatur odit voluptas impedit eveniet, dolore dolor veniam.
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam recusandae nulla, ea odio voluptates adipisci magnam quidem. Est laudantium, ullam nam nisi consequatur odit voluptas impedit eveniet, dolore dolor veniam.
                   
               </p>
           </div>

        </div>
    )
}