import React from 'react'
import { SyntheticEvent } from 'react'

interface ButtonAtom {
  name?: string
  styleButton?: {}
  styleText?: {} 
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  
}

const Button: React.FC<ButtonAtom> = ({name, styleButton, className, onClick}) => {

  return (
    <button onClick={onClick} className={className} style={styleButton}>
      {name}
    </button>
  )
}

export default Button