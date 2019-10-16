import React from 'react'
import { Link } from "react-router-dom"

const ParkTile = (props) =>{
    return(
        <div className="park-tile">
            <Link to={`/parks/${props.id}`}>
                <p>{props.name}</p>
            </Link>
        </div>
    )
}
export default ParkTile
