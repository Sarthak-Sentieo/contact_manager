import React from 'react'
import Right_table from './Right_table'

function Right_top() {
    return (
        <div>
            <div className='frame'>
                <div  >
                    <form className='search' >
                        <input type="text" placeholder="     Search.." name="search" />
                    </form>
                </div>
            </div>
            <div className='frame2'>
               <Right_table/>
            </div>

        </div >
    )
}

export default Right_top
