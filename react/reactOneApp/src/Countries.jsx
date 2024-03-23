import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"

export default function Countries() {
    const[countries, setCounties] = useState([])
    const url = 'https://restcountries.com/v3/all'
    const fetchApi = async(url) => {
        let response = await fetch(url)
        let data  = await response.json()
        setCounties([...data])
        
    }
    useEffect(() => {
        fetchApi(url)
    },[])
   
  return (
    <div style={{border:'1px solid black', padding:'10px', margin: '10px'}}>
        <h1>Countries</h1>
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
            <div style={{width: '50%'}}>
            <ul className="container">
            {
                    countries.map((countrie) => {
                        return <li key={Math.random()}>
                                    <h4>{countrie.name.common}</h4>
                                    <img src={countrie.flags[0]} width='100px'/>
                                    <div>
                                        <Link to={`/countires/countieDetails/${countrie.name.common}`}>Read more...</Link>
                                    </div>
                                </li>
                    })
            }
            </ul>
            </div>
                
            <div className="blk">
                <h1>Details</h1>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}
