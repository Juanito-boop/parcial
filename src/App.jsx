import Header from './assets/components/Header'
import Login from './assets/components/login';
import Promo from './assets/components/promo'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <div class="h-screen bg-no-repeat bg-fondo-main bg-cover">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route element={<></>} path="/"></Route>
          <Route element={<></>} path="/home"></Route>
          <Route element={<Promo />} path="/promo"></Route>
          <Route element={<Login />} path="/about"></Route>
        </Routes>
      </BrowserRouter>

      <div className='flex flex-col mt-[5%]'>
        <div className='flex flex-col w-1/5 mx-auto text-white '>
          <p className='text-8xl'>Fasion Trending</p>
          <p className='text-5xl'>Special Offer</p>
          <div className='text-lg tetx-black'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <button className='w-full text-3xl text-black'>Buy now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
