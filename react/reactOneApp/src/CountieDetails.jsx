import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CountieDetails() {
    const[details, setDetails] = useState(null)
    var x = useParams()
    console.log(x)
    const url = `https://restcountries.com/v3/name/${x.cname}`
    
    const fetchApi = async() => {
        let reponse = await fetch(url)
        let data = await reponse.json()
        setDetails({...data[0]})
    }
    useEffect(()=>{
        fetchApi(url)
    },[x.cname])
    
  return (
    <div style={{border:'1px solid black', padding:'10px', margin: '10px'}}>
        <h1>{x.cname} CountieDetails</h1>
        {
            details && (
                <div style={{width:'50%',display: 'flex', justifyContent: 'space-evenly', border: '1px solid black', padding: '10px', alignItems:'center'}}>
                <div>
                    <img src={details.flags[0]} width='150px'/>
                </div>
                <div>
                    <h3>{details.name.common}</h3>
                    <h3>population: {details.population}</h3>
                    <h3>capital: {details.capital}</h3>
                </div>
            </div>
            )
        }
    </div>
  )
}
