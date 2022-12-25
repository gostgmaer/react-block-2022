import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { toast } from 'react-toastify';
import Home from '../../Pages/Home/Home';
import Error from '../../Pages/Notfound/Error';
import About from '../../Pages/Others/About';
import Contactus from '../../Pages/Others/Contactus';
import Disclaimer from '../../Pages/Others/Disclaimer';
import Privacy from '../../Pages/Others/Privacy';
import Terms from '../../Pages/Others/terms';
import Post from '../../Pages/Post/Post';
import Posts from '../../Pages/Posts/Posts';
import Search from '../../Pages/Search/Search';

const Navigation = () => {
  return (
    <React.Fragment>
        <Routes>
            <Route path='/' element={<Home></Home>} ></Route>
            <Route path='/q' element={<Search></Search>} ></Route>
            <Route path='/disclaimer' element={<Disclaimer></Disclaimer>} ></Route>
            <Route path='/privacy-policy' element={<Privacy></Privacy>} ></Route>
            <Route path='/terms-acontions' element={<Terms></Terms>} ></Route>
            <Route path='/contact' element={<Contactus/>} ></Route>
            <Route path='/about' element={<About></About>} ></Route>
            <Route path='/posts/:category/:name' element={<Posts></Posts>} ></Route>
            <Route path='/posts/:tags/:name' element={<Posts></Posts>} ></Route>
            <Route path='/posts' element={<Posts></Posts>} ></Route>
            <Route path='/post/:id' element={<Post></Post>} ></Route>
            <Route path='*' element={<Error></Error>} ></Route>
        </Routes>
    </React.Fragment>
  )
}

export default Navigation