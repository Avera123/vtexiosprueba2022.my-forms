import React from "react"
import { Input, DatePicker } from 'vtex.styleguide'
import styles from './index.css'

function FormUpdteDataCustomer(){
  const startDate1 = new Date()
  return <>
    <div className={styles.Form}>
    <div>
    <div className={styles.Inputs}>
      <Input placeholder="email@email.com" size="small" label="Email:"
      className={styles.InputEmail}
       />
    </div>
    </div>

    <div>
    <div className="mb5">
      <Input placeholder="Alejandro" size="small" label="Nombres:" />
    </div>
    </div>


    <div>
    <div className="mb5">
      <Input placeholder="Vera" size="small" label="Apellidos:" />
    </div>
    </div>

    <div>
    <div className="mb5">
    <DatePicker
      label="Fecha de nacimiento"
      size="small"
      value={new Date()}
      onChange={date => console.log(date)}
      locale="en-US"
    />
    </div>
    </div>

    <div>
    <div className="mb5">
      <Input placeholder="304 559 99 15" size="small" label="Teléfono:" />
    </div>
    </div>

    <div>
    <div className="mb5">
      <input placeholder="Nativo" label="Nativo:" className={styles.Input} />
    </div>
    </div>

    </div>
  </>
}

export default FormUpdteDataCustomer
