import React, { useContext } from 'react'
import './CheckOut.css'
import { StoreContext } from '../../context/StoreContext'
const CheckOut = () => {

  const {books}=useContext(StoreContext);
  
  return (
    <div>CheckOut</div>
  )
}

export default CheckOut