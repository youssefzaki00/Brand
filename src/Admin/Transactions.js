import React from 'react'

function Transactions(props) {
  return (
    <div className={`bg-white rounded-lg flex py-4 col-span-${props.cols} flex-col lg:w-auto w-full h-full shadow`}>
      <div className='flex justify-between items-center py-2 px-6 mb-4'>
        <h4 className='font-semibold '>Last Transactions</h4>
        <span className='text-blue-600 text-sm font-semibold'>View All</span>
      </div>
      <div className='grid grid-cols-9 w-full bg-gray-100 text-gray-500 text-sm px-6 py-4  ' >
        <div className='col-span-2'>ID</div>
        <div className='col-span-3'>Issued Date</div>
        <div className='col-span-2'>TOTAL</div>
        <div className='col-span-2'>ACTIONS</div>
      </div>
      {props.transactions.map((T => (
        <div className='TransactionsTable grid grid-cols-9 w-full items-center justify-center bg-white text-sm px-6 py-4 border-b border-b-gray-400 last:border-b-0 ' key={T.id} >
        <div className='col-span-2 text-blue-600'>{T.id}</div>
          <div className='col-span-3 text-xs font-medium'>{ T.date}</div>
          <div className='col-span-2'>{T.total}</div>
          <div className='col-span-2 text-blue-600'>{ T.action}</div>
      </div>
      )))}
    </div>
  )
}

export default Transactions