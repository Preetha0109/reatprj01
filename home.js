const Home = () => {
    let images=[
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/8317/1328317-v-56412010beba"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7977/1317977-v-2b6393692cd1"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7383/1357383-v-6c8546f2e7bd"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9536/1359536-v-135fa53ba6ef"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1780/1291780-v-d20f8d106d78"}
    ]
    return ( 
        <div className="home">
            <div className="poster">
                <img  width="1500" height="500" src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-09-21/Desk_MasterChefAustraliaNS-9875146c-696e-49fc-82aa-ee739909adf7.jpg"/>
            </div>
            <div className="movies_list">
                {images.map((data)=>{
                    return(
                        <img width="300" height="250" src={data.img} alt=""/>
                    )
                })

                }
            </div>    
        </div> 
    );
}
 
export default Home;
