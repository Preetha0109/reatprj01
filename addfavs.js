const Addfavs = () => {
    return ( 
        <div className="addfavs">
            <div class="form">
                <img src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png " alt=" "></img>
                <form action="">
                    <input type="text" placeholder="Title"></input>
                    <input type="text" placeholder="Genre"></input>
                    <input type="text" placeholder="Language"></input>
                    <input type="Number"min="0" max="10" placeholder="Rating"></input>
                    <button id="btn">Add</button>    
                </form>
            </div>
            <div class="content">
                <h1>Add your favourites movies and <br></br> TV shows</h1>
            </div>



        </div>
     );
}
 
export default Addfavs;