import React from 'react'
import Sidebar from './Menu/Sidebar'
import Right_Main from './Right_Side/Right_Main'
function MainComp() {
    return (
        <div className='app_main'>
            <div className='app_menu_main'>
            <Sidebar />
            </div>
            <div className='app_right_main'>
            <Right_Main />
            </div>

        </div>
    )
}

export default MainComp
