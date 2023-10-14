import React from 'react'
import ChartCard from './ChartCard'
import Char1  from "../imgs/Charts/Group 1.png";
import Char2  from "../imgs/Charts/Vector 1.png";
import Char3 from "../imgs/Charts/Vector 3.png";
import country1 from '../imgs/countries/us 1.png'
import country2 from '../imgs/countries/br 1.png'
import country3 from '../imgs/countries/in 1.png'
import country4 from '../imgs/countries/au 1.png'
import ReportsCard from './ReportsCard';
import TopCountries from './TopCountries';
import PopularProducts from './PopularProducts';
import Transactions from './Transactions';
function DashboardContent() {
    const Reports = [
    { value: 24, label: 'Customers' },
    { value: 1.4, label: 'Products' },
    { value: 125, label: 'Revenue' }
  ];
  const Countries = [
    {
      value: 30,
      label: 'United States',
      percentage: 59,
      progress: 25.8,
      img: country1
    },
    {
      value: 26,
      label: 'Brazil',
      percentage: 41,
      progress: 16.2,
      img: country2
    },
    {
      value: 22,
      label: 'India',
      percentage: 28,
      progress: 12.2,
      img: country3
    },
    {
      value: 17,
      label: 'Australia',
      percentage: 12,
      progress: 11.9,
      img: country4
    }
  ];
  const Products = [
    { label: 'Apple iPhone 13', id: '#FXZ-4567', cost: 999.29 },
    { label: 'Nike Air Jordan', id: '#FXZ-3456', cost: 72.40 },
    { label: 'Beats Studio 2', id: '#FXZ-9485', cost: 99.90 },
    { label: 'Apple Watch Series 7', id: '#FXZ-2345', cost: 249.99 },
    { label: 'Amazon Echo Dot', id: '#FXZ-8959', cost: 79.40 },
    { label: 'PlayStation Console', id: '#FXZ-7892', cost: 129.48 }
  ];
  const transactions = [
    { id: '#5089', date: '04 March 2022', total: '$96', action: 'View Detail' },
    { id: '#2141', date: '01 December 2022', total: '$140', action: 'View Detail' },
    { id: '#1251', date: '09 November 2023', total: '$564', action: 'View Detail' },
    { id: '#9652', date: '24 January 2022', total: '$747', action: 'View Detail' },
    { id: '#3212', date: '31 April 2023', total: '$8200', action: 'View Detail' },
    { id: '#7890', date: '29 May 2023', total: '$4200', action: 'View Detail' },
  ]
  return (
    <>
      <div className='flex flex-col md:grid grid-cols-5 gap-4 items-center mb-4'>
        <ChartCard cols={3} name={'Total Sales & Costs'} number={ 350} img={Char1} />
        <ChartCard cols={2} name={'Sessions'} number={16.5} img={ Char2} />
      </div>
      <div className='flex flex-col md:grid grid-cols-3 gap-4 items-center'>
        <ChartCard  name={'Total Orders'} number={ 25.7} img={Char3} />
        <ChartCard name={'Total Profit'} number={50} img={ Char3} />
        <ChartCard  name={'Discounted Amount'} number={12} img={ Char2}  />
      </div>
      <div className='lg:grid  grid-cols-5 gap-4 items-center mt-6'>
        <ReportsCard cols={3} Reports={Reports} />
        <TopCountries cols={2} number={ 16.5} Countries={Countries} />
      </div>
      <div className='lg:grid grid-cols-3 gap-4 items-center mt-6'>
        <PopularProducts cols={1} Products={Products} />
        <Transactions cols={2} transactions={transactions} />
      </div>
    </>
  )
}

export default DashboardContent