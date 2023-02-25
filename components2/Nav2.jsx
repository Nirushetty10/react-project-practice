import React from 'react'
import Menu2 from '../components2/Menu2';
import Logo2 from '../components2/Logo2';
import Search from './Search';

function Nav2() {
  return (
    <div className='navbar'>
      <div className="navleft">
         <Logo2 />
         <Search />
      </div>
      <div className="navright">
          <Menu2 />
      </div>
    </div>
  )
}

export default Nav2