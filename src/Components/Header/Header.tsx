import { Person, Search } from '@mui/icons-material'
import React, { useState } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import './Header.scss'

const Header = () => {
  const [search, setSearch] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleLogout = () => {
    console.log('logout')
  }

  return (
    <header>
      <div className='site-functions'>
        <img src='logo512.png' alt='logo' />
        <div></div>
        <form>
          <input
            type='search'
            name='keywords'
            placeholder='Search by keywords'
            value={search}
            onChange={e => handleSearch(e)}
          ></input>
          <button type='submit'><Search /></button>
        </form>


      </div>

      <div className='user-icons'>
        <div className="icon-container">
          <img src='logo192.png' alt='profile' className="header-icon" />
        </div>
        <div className='icon-container'>
          <LogoutIcon className='header-icon' onClick={handleLogout} />
        </div>
      </div>
    </header>
  )
}

export default Header