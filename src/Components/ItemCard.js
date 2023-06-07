import React, { useEffect, useState } from 'react'
import axios from 'axios';
function ItemCard() {
    const options = {
  url: 'https://fakestoreapi.com/products',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  }
  };
  const [cardItem, setCardItem] = useState([]);
  useEffect(() => {
    axios(options)
      .then(response => {
    setCardItem(response.data);
  });
  }, []);
  return (
    <>
      {
        cardItem.map((item) => {
          if (item.category === "women's clothing" || item.category === "men's clothing") {
            return (
              <div key={item.id} className='item-card col-span-2 rounded border border-gray-200 flex flex-col justify-between p-4 bg-white  max-h-96'>
                <div className='card-img flex justify-center p-2'>
                  <img src={item.image} alt='' className='' />
                </div>
                <div className='card-details flex flex-col'>
                  <h4 className=' text-lg font-medium  mb-1'>${item.price}</h4>
                  <span className=' text-gray-400 text-xs'>{item.title.slice(0,22)}-{item.category==="women's clothing"? 'for women':'for men' }</span>
                </div>
              </div>
            )
          }
          })
      }
    </>
  );
}

export default ItemCard