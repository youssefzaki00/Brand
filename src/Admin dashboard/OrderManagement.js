import React, { useState } from 'react'
import './orderManagement.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import DropDown3 from '../Components/DropDown3';
import OrdersTable from './OrdersTable';

function OrderManagement() {
  const Rows = [
    { id: 32143, created: '2 min ago', customer: 'Hamdy imad ', total: 5645, profit: { amount: 795, percent: 86 }, status: 'Pending' },
    { id: 23241, created: '12 min ago', customer: 'ahmed imad ', total: 1355, profit: { amount: 566, percent: 41 }, status: 'Confirmed' },
    { id: 5643, created: '32 min ago', customer: 'Hamdy zaki  ', total: 346, profit: { amount: 421, percent: 4 }, status: 'Processing' },
    { id: 67454, created: '17 min ago', customer: 'Youssef Hamdy ', total: 8563, profit: { amount: 865, percent: 98 }, status: 'Picked' },
    { id: 85675, created: '22 min ago', customer: 'ahmed hamdy', total: 864, profit: { amount: 64, percent: 32 }, status: 'Shipped' },
    { id: 9567, created: '5 min ago', customer: 'zaki imad ', total: 657, profit: { amount: 24, percent: 16 }, status: 'Delivered' },
    { id: 12324, created: '21 min ago', customer: 'khaled imad ', total: 4124, profit: { amount: 321, percent: 5 }, status: 'Cancelled' }
  ];
  const OrdersStatues = ['Pending', 'Confirmed', 'Processing', 'Picked', 'Shipped', 'Delivered', 'Cancelled'];
  const Cells=['order id','created','customer','total','profit','status']
  const [activeOrder, setActiveOrder] = useState('');
  function handleActive(order) {
    setActiveOrder(order);
  }
  return (
    <div className='OrderManagement'>
      <nav>
        <ul className='grid items-center lg:grid-cols-7 grid-cols-4 text-center border-b border-b-gray-400 rounded-md rounded-s-none rounded-e-none pb-2 '>
          {OrdersStatues.map((order) => (
            <div key={order} to={order}
              className={`${activeOrder === order ? 'activeOrder' : '' } p-2 lg:py-2 lg:px-5 text-sm lg:text-base`}
              onClick={() => handleActive(order)}>
              {order}
            </div>
            ))}
            </ul>
      </nav>
      <div className='flex justify-between items-center my-6 flex-col lg:flex-row'>
        <div className=' relative flex items-center shadow rounded-3xl w-full lg:w-auto bg-white' >
          <input type='search' placeholder='Search By Order ID' className='px-4 py-2  rounded-3xl focus:placeholder:opacity-0 placeholder:text-xs placeholder:lg:text-sm ' />
          <FontAwesomeIcon icon={faSearch} alt='search icon'
            className=' absolute  right-4 text-gray-400   ' />
        </div>
        <div className='filter mt-3 text-xs w-full lg:w-auto'>
        <DropDown3/>
        </div>
      </div>
      <OrdersTable Cells={Cells} Rows={Rows}/>
      </div>
      )
    }
    
    // <Outlet/>
export default OrderManagement