import { useEffect } from "react"
import { useRef } from "react"
import Address from "./Address"


const Todo = () => {
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const address = useRef()

    useEffect(()=>{
        firstNameRef.current.focus()
    },[])

    const checkEnter = (e) => {
        if(e.key === "Enter"){
            lastNameRef.current.focus()
        }
    }

    const lastname = (e) => {
        if(e.key === 'Enter') {
            address.current.focus()
        }
    }
    return(
        <div style={{border:'1px solid black', padding: '10px', margin:'10px'}}>
            <h1>Todo List</h1>
            <input type='text' ref={firstNameRef} onKeyUp={(e)=>{checkEnter(e)}}/>
            <br/>
            <input type="text" ref={lastNameRef} onKeyUp={(e)=>{lastname(e)}}/>
            <Address address={address}/>
        </div>
    )
}

export default Todo