import React from 'react'
import { Link , NavLink } from 'react-router-dom'
function Header() {
    const navStyle = ( {isActive} ) =>{
        return {
            color: isActive ? "rgb(85, 231, 72)" : "#fff",
            textDecoration :   "none",
            fontWeight : isActive ? "bold" : "normal"
        }
    }
  return (
    <div>
   



                <div className=' app-container flex justify-start border-b-[1px] border-b-[#858585] py-3 mb-2'>
                    <a href="/">English </a>
                </div>

                        <div className=' app-container flex justify-between'>
                        <div>
                            <a href="/">login</a>
                        </div>            <img src="http://bigramyweb.inovaeg.com/static/media/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg" alt="" />
                        </div>
        <div className=' bg-[#1f1e1e]' >
            <div className=' flex justify-between app-container'>
            <div>
                cart
            </div>
             <ul className=' flex justify-center items-center gap-3'>
            <li><NavLink style={navStyle} to="/">Home</NavLink></li>
            <li><NavLink style={navStyle} to="/news">news</NavLink></li>
            <li><NavLink style={navStyle} to="/courses">courses</NavLink></li>
            <li><NavLink style={navStyle} to="/books">E-books</NavLink></li>
            <li><NavLink style={navStyle} to="/contact">contact us</NavLink></li>
        
        </ul>
        </div>
        </div>
    </div>
  )
}

export default Header