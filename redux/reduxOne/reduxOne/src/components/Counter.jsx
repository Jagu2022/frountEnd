import React from 'react'
import { connect } from 'react-redux'
import { decCount, incCount } from '../store/action'

function Counter(props) {
    
  return (
    <div>
        <h1>Counter : {props.c.count}</h1>
        <button onClick={()=>{props.dispatch(incCount())}}>increment</button>
        <button onClick={()=>{props.dispatch(decCount())}}>decrement</button>
    </div>
  )
}

export default connect((store) => store) (Counter)
