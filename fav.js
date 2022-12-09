import { useEffect,useState } from "react";

const Fav = () => {
    
    let [favourites,setFav]=useState([])
    let handleDelete=(id)=>{
        setFav(favourites.filter(x=>x.id!==id))
    }
    useEffect( ()=> {
        fetch("http://localhost:4000/fav")
        .then(res =>{
            return res.json()
        })
        .then(data=>{
            setFav(data)
        })
    },[] )

    return ( 
        <div className="favs">
            <h1>Favourite Movies and Tv shows</h1>
            {
                favourites.map((data)=>{
                    return(
                       <div className="list">
                            <h1>{data.title}</h1>
                            <p>{data.rating}</p>
                            <p>{data.genre},{data.language}</p>
                            <button onClick={()=>handleDelete(data.id)}>Delete</button>
                        </div>
                    )
                })

                }
        </div>
     );
}
 
export default Fav;