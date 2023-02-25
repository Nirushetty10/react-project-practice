import React from 'react'
import mob from "../image2/mob2.png"
import profile from "../image2/profile.png"
import cart from "../image2/cart.png"

function Menu2() {
  return (
    <div className='menu'>
      <div className='menufirst'>
        <img src={mob} alt="" />
        <a href="">Download App</a>
      </div>
      <div className='menucenter'><a href=''>Become a Supplier</a></div>
      <div className='menulast'>
        <div className='prof'>
          <img src={profile} alt="" />
          <a href="">Profile</a>
        </div>
        <div className='prof'>
          <img src={cart} alt="" />
          <a href="">Cart</a>
        </div>
      </div>
    </div>
  )
}

export default Menu2