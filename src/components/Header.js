import React from 'react'
import { Link } from 'react-router-dom'
import FeaturedPosts from './FeaturedPosts'
function Header({state,data}) {
  return (
    <header>
    <div className="banner">
        <div className="layer">
            <div className="overlay"></div>
            <img src={"https://images.pexels.com/photos/2387819/pexels-photo-2387819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="Banner" />
        </div>
        {data ? <FeaturedPosts state={state}/> : <div style={{marginTop: '130px'}}></div>}
    </div>
    </header>
  )
}

export default Header
