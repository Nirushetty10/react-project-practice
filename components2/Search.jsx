import React from 'react'
import img from "../image2/search.png"

function Search() {
  return (
    <div className='search'>
        <img src={img} alt="" />
    <input type="text" name="" id="" placeholder="Try Saree, Kurti or Search by Product Code"/>
    </div>
  )
}

export default Search