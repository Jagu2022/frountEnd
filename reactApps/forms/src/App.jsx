import { Link, Outlet } from "react-router-dom"
import Form from "./Form"
import MyContext from "./Mycontext"

function App() {
  const userDetails = {
    firstName: 'bharath',
    lastName: 'kumar'
  }
  return (
    <>
      <MyContext.Provider value={userDetails}>
      <div>
        <h1>react app</h1>
        <Link to='/'>home</Link>
        <Link to='/form'>form</Link>
        <Link to='/stopwatch'>stop watch</Link>
        <Link to='/data'>data</Link>
        
      </div>
      <Outlet/>
      </MyContext.Provider>
    </>
  )
}

export default App
