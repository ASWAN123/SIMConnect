import React, { useEffect } from 'react'
import Signup from '../Signup'
import { useNavigate, useOutletContext } from 'react-router-dom'

const OrderPage = () => {
  const [userData] = useOutletContext()
  let navigate   = useNavigate()

  useEffect(() => {
    if (userData.subscriptions.length >= 3 ) {
      navigate('/SIMConnect/account')
      return 
    }
  } ,  [] )


  return (
    <div>
      <Signup   userData = {userData}   />
    </div>
  )
}

export default OrderPage
