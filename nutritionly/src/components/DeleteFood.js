import React from "react"

export default function DeleteFood(props){
    return(
        <button onClick={() => props.deleteFood(props.id)}>Delete</button>
    )
}