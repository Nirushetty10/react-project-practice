import React from 'react'

function Image(props) {
  return (
    <div>
        <img src={props.image} alt="" width="200px" />
    </div>
  )
}

export default Image