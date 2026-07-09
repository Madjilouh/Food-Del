import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { assets } from '../../assets/assets'

const MyOrders = () => {

  const { url, token } = useContext(StoreContext)
  const [data, setData] = useState([])

  const fetchOrders = async () => {
    try {
      const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } })
      setData(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (token) {
      fetchOrders()
    }
  }, [token])

  return (
    <div className='my-orders'>
      <h2>Mes commandes</h2>
      <div className="container">
        {data.map((order, index) => (
          <div key={index} className='my-orders-order'>
            <img src={assets.parcel_icon} alt="" />
            <p>
              {order.items.map((item, i) => (
                i === order.items.length - 1
                  ? `${item.name} x ${item.quantity}`
                  : `${item.name} x ${item.quantity}, `
              ))}
            </p>
            <p>${order.amount}.00</p>
            <p>Articles : {order.items.length}</p>
            <p><span>&#x25cf;</span> <b>{order.status}</b></p>
            <button onClick={fetchOrders}>Suivre la commande</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyOrders