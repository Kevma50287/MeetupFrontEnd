import { Button } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { NavButtonProps } from '../../Types/ButtonType'

const NavButton = ({ title, navigateTo, navigateFrom, size }: NavButtonProps) => {
  const navigate = useNavigate()
  const location = useLocation().pathname
  const handleNavigate = () => {
    if (navigateFrom === 'current-page') {
      navigate(`${location}${navigateTo}`)
    } else {
      navigate(`${navigateTo}`)
    }
  }
  return (
    <Button className='nav-button' onClick={() => handleNavigate()} size={size}>
      ${title}
    </Button>
  )
}

export default NavButton