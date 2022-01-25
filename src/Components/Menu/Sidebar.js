import React, { useEffect, useState } from 'react'
import '../CSS/Sidebar.css'

import { Default_account } from './Default_account'

function Sidebar() {
    const deleteAll = () => {
        alert("delete all")
    }
    const merge = () => {
        alert("merge and link")
    }
    const upload = () => {
        alert("upload")
    }
    const add_account = () => {
        alert("add_account")
    }
    const [users, setUsers] = useState([])
    useEffect(() => {
        setUsers(Default_account);

    }, []);
    const handleChange = (e) => {
        const { name, checked } = e.target;
        if(name ==="allSelect"){
          let tempUser =users.map(user=>{return {...user,isChecked : checked}})
          setUsers(tempUser);
        }else{

            let tempUser = users.map((user) => user.email === name? { ...user, isChecked: checked } : user);
            setUsers(tempUser)
        }
    };
    return (
        <div>
            <div className='main_head' >Contact Manager </div>
            <div className='form'>
                    <div className='head1'>
                        <input type="checkbox"  onChange={handleChange} name='allSelect'checked ={users.filter(user=>user?.isChecked!==true).length < 1}/>
                        <label htmlFor="title" >&nbsp;&nbsp;&nbsp;All Contact</label>
                        <div className='btn' onClick={deleteAll}> Clear All</div>
                    </div>
                    {users.map((user,key) => {
                        return (
                            <div className='accounts' key={key}>
                                <div className='title'>{user.title}</div>
                                <div className='email'> 
                                <input type="checkbox" name={user.email}  checked ={user?.isChecked || false}
                                     onChange={handleChange} />
                                    <label htmlFor="title" className="form-label">&nbsp;&nbsp;&nbsp;{user.email}</label>
                                </div>

                            </div>

                        )
                    })}

                </div>


            <hr style={{ marginLeft: '10px', marginRight: '20px', color: '#e0e6fa', height: '2px' }} />

            <div className='sidebelow'>
                <ul>
                    <li onClick={merge}><i class="fas fa-link" ></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Merge and Link</li>
                    <li onClick={add_account}><i class="fas fa-plus" ></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Account</li>
                    <li onClick={upload}><i class="fas fa-upload" ></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Upload</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
