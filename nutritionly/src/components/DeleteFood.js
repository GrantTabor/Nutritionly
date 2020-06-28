import React from "react"

export default function DeleteFood(props){
    return(
        <button className="delete-button" onClick={() => props.deleteFood(props.id)}>X</button>
    )
}