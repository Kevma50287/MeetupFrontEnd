import { Button } from '@mui/material'
import React from 'react'
import { ButtonProps } from '../../Types/ButtonType'

const FunctionButton = ({ title, clickAction, size }: ButtonProps) => {
  return (
    <Button className='function-button' onClick={e => clickAction(e)} size={size}>
      ${title}
    </Button>
  )
}

export default FunctionButton