const Navbar = () => {
    let links=[
        {link:"Home", path:"/"},
        {link:"About", path:"/about"},
        {link:"Favourites",path:"/favourites"},
        {link:"signup" ,path:"/addfavs"}
    ]
    return ( 
        <div className="navbar">
            <div className="logo">
                     <img src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png " alt=" "/>
            </div>
            <div className="links">
                {
                    links.map((data)=>{
                        return(
                            <a href={data.path}>{data.link}</a>

                        )
                    })
                }
               
               
            </div>
        </div>
     )
}
 
export default Navbar;