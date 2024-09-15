
import './App.css';
import './productS.css'
import './home.css'
import './about.css'
import './Signup.css'
import './footer.css'
import './Cart.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Signup from './Components/Pages/Signup';
import Cart from './Components/Pages/Cart';
import ProductS from './Components/Pages/ProductS';

import { BrowserRouter , Routes , Route } from  'react-router-dom';
import {Provider} from 'react-redux'
import store from './Reduder/store'

function App() {
  return (
    
    <>

    < Provider store ={store}>


    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='home' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/productS' element={<ProductS/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
