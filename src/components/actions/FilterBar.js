import React from 'react'
import {connect} from 'react-redux'

const FilterBar = ({dispatch}) => {
    return (
        <div>
         <button onClick={()=>dispatch({type:"SET_VISIBILITY_FILTER", filter:"daily"})}>Daily</button>  
         <button onClick={()=>dispatch({type:"SET_VISIBILITY_FILTER", filter:"weekly"})}>Weekly</button>   
         <button onClick={()=>dispatch({type:"SET_VISIBILITY_FILTER", filter:"monthly"})}>Monthly</button>   
        </div>
    )
}

export default connect()(FilterBar)
