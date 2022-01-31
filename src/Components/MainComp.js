import React, { useState } from 'react'
import Sidebar from './Menu/Sidebar'
import Right_Main from './Right_Side/Right_Main'



function MainComp() {
    const [selected,setselected] = useState('')
    return (
        <div className='app_main'>
            <div className='app_menu_main'>
            <Sidebar setselected={setselected} />
            </div>
            <div className='app_right_main'>
            <Right_Main  selected={selected} />
            </div>

        </div>
    )
}

export default MainComp
