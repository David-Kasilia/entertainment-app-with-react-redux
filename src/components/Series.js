import React from 'react'

const Series = (props) => {
  return (
    <div>
        <p>{props.id}</p> 
      <p>{props.name}</p>
      <p>{props.genre}</p>
      <p>{props.status}</p>
      <p>{props.summary}</p>

    </div>
  )
}

export default Series
