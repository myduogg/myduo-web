
import React from 'react'

interface InputAtom {
  name?: string
  className?: string
  type: string;
  placeholder?: string
  isRequired?: true
  value? : string
  
}

const Input: React.FC<InputAtom> = ({name, type, className, placeholder, isRequired, value }) => {

  return (
    <input 
      required={isRequired} 
      className={`focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-transparent border-gray-300 text-black py-0.5 rounded-md border pl-3 w-5/6 ${className}`}  
      placeholder={placeholder} 
      value={value}
      type={type} name={name}  />
      
  )
}

export default Input