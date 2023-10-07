import React from 'react'
import {
  AiOutlineUser,
  AiOutlineSearch
} from 'react-icons/ai';
import '../../assets/css/Navadmin.css'
const Nav = () => {
  return (
    <div>
        <div className='container-nav'>
            <div className='nav-logo-admin'>SPORTSHOP</div>
            <div className='nav-search-admin'>
                <input className='nav-admin-input' type="text" placeholder='Tìm kiếm'/>
                <div className="nav-search-icon">  
                  <AiOutlineSearch></AiOutlineSearch>
                </div>
            </div>
            <div className='nav-ures-admin'>
              <AiOutlineUser/>
            </div>
        </div>
    </div>
  )
}

export default Nav
