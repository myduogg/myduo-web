import React from 'react'

import {FormLogin} from '../../src/components/molecules/index'
import styles from  './styles.module.css'

const Login: React.FC = () =>   {

 
  return (
    <div className={styles.sectionLogin}> 

      <FormLogin className="w-72 bg-white p-5 shadow-2xl rounded-sm" /> 
    </div>
  )
}

export default Login