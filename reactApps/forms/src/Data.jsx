import { useContext } from "react"
import MyContext from "./Mycontext"

const Data = () => {
    const data = useContext(MyContext)
    console.log(data)
    return(
        <div>
            <h3>data</h3>
            <ul>
                <li>{data.firstName}</li>
                <li>{data.lastName}</li>
            </ul>
        </div>
    )
}
export default Data