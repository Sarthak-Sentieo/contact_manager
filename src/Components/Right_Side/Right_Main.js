import React from 'react'
import '../CSS/Right_Side.css'
import Right_top from './Right_top'
import Right_table from './Right_table'


function Right_Main(props) {
    return (
        <>
        <Right_top/>
        <Right_table selected ={props.selected}/>
        </>
        )
}

export default Right_Main
