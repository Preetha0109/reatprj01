import './App.css';
import Navbar from './navbar';
import Home from './home';
import Fav from './fav';
//import State from './state';
import Addfavs from './addfavs';
import About from './about';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './footer';


function App() {
 
  return (
    <div className="App">
           <BrowserRouter>
              <Navbar/>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/fav' element={<Fav/>}/>
                <Route path='/addfavs' element={<Addfavs/>} />
                <Route path='/about' element={<About/>} />

              </Routes>
              <Footer/>

           </BrowserRouter>
            
    </div>
  );
}

export default App;
