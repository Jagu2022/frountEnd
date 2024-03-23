import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div style={{border:'1px solid black', padding: '10px', margin:'10px'}}>
        <h1>React Router</h1>
        <Link to='/todo' style={{margin:'10px'}}>todo</Link>
        <Link to='/counter' style={{margin:'10px'}}>counter</Link>
        <Link to='/countires'>counties</Link>
        <Outlet/>
      </div>
    </>
  )
}

export default App
