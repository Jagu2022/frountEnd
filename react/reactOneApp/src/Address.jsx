import React from 'react'

export default function Address(props) {
    console.log(props)
  return (
    <div style={{border:'1px solid black', padding: '10px', margin:'10px'}}>
        <h1>Address</h1>
        <input type='text' ref={props.address}/>
    </div>
  )
}
