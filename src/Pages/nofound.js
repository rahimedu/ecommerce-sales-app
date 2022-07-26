import React from 'react'

export default function NotFound(props) {
        return(
            <div style={{color:'#fff',margin:'50px'}}>
                <h3><span style={{color:'red'}}>404 </span> Not found the location : 
                <span style={{color:'rgb(177, 175, 175)'}}> {props.location.pathname} </span> </h3>
            </div>
        )
    }
