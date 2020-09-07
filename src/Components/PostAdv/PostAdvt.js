import React,{ useState} from 'react'

import "./PostAdv.css"

import Mobile from "./Mobile"
import Electronics from "./Electronics"
import Furnitures from "./Furnitures"
import Housing from "./Housing"
import Vehicles from "./Vehicles"
import { useHistory} from 'react-router-dom'

function PostAdvt(props) {
    let history = useHistory();

    const [Option, setOption] = useState("null")


    return (
        <div>
            <div className="buttonGroup">
                <button className="listButton" type="button" value="mobile" onClick={e => setOption(e.target.value)}>Mobiles</button>
                <button className="listButton" type="button" value="electronics" onClick={e => setOption(e.target.value)}>Electronics</button>
                <button className="listButton" type="button" value="furnitures" onClick={e => setOption(e.target.value)}>furnitures</button>
                <button className="listButton" type="button" value="housing" onClick={e => setOption(e.target.value)}>Housing</button>
                <button className="listButton" type="button" value="vehicles" onClick={e => setOption(e.target.value)}>Vehicles</button>
                <button className="listButton" type="button" onClick={()=> history.push("/dashboard")} >Return to Dashboard</button>
            </div>
            <div className="buttonOutput">
                {Option === "mobile"? <Mobile User={props.User}/>:null}
                {Option === "electronics"? <Electronics User={props.User} />:null}
                {Option === "furnitures"? <Furnitures User={props.User} />:null}
                {Option === "housing"? <Housing User={props.User} />:null}
                {Option === "vehicles"? <Vehicles User={props.User} />:null}
            </div>
        </div>
    )
}

export default PostAdvt
