import React from 'react'
import { Input, Button } from '../atoms'


interface FormMolecule {
  children?: React.ReactNode;
  className?: string
}

const FormLogin: React.FC<FormMolecule> = ({children , className}) => {
  return (
    <>
      <form  className={` flex flex-col justify-center items-center space-y-3  ${className}`}>
        <Input 
          isRequired
          placeholder="Email" 
          type="email" />

        <Input 
          isRequired
          placeholder="Senha" 
          type="password" />

        <Input
          className="transition duration-500 ease-in-out hover:bg-yellow-700  bg-yellow-600 text-lg text-white border-yellow-600 cursor-pointer rounded-lg w-52"
          type="submit" 
          value="Entrar"  />

          <Button 
            name="Esqueceu a senha?"  
            className=" text-center text-yellow-600"/>

          <p className="border-b pt-2 border-gray-300 w-5/6"></p> 

          <Button
            name="Criar nova conta" 
            className=" text-center text-sm h-7   text-white w-1/2 rounded-md bg-yellow-700" />
      </form>

      

    </>
  )
}

export default FormLogin