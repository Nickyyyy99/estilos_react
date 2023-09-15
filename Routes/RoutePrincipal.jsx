import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Contact from '../components/Contact'
import About from '../components/About'
export default function RoutePrincipal() {
  return (
    <div>
        <BrowserRouter>
            <header>
                <nav>
                    <ol>
                        <li><NavLink to='/Home'>Home</NavLink></li>
                        <li><NavLink to='/Contact'>Contact</NavLink></li>
                        <li><NavLink to='/About'>About</NavLink></li>
                    </ol>
                </nav>
            </header>
        <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/about' element={<About />}/>
        </Routes>
        
        </BrowserRouter>
    </div>
  )
}
