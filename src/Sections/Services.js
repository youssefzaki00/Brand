import React from 'react';
import './Services.css';
import srv1  from '../imgs/Mask group (2).png'
import srv2  from '../imgs/Mask group (1).png'
import srv3  from '../imgs/Mask group.png'
import srv4 from '../imgs/image 107.svg'
import { faMagnifyingGlass, faSearch, faTags, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import icon1 from '../imgs/search.svg'
// import icon2 from '../imgs/inventory_2.svg'
// import icon3 from '../imgs/Vector.svg'
import icon4 from '../imgs/security.svg'
function Services() {
  return (
    <div className='container mx-auto px-6 xl:px-16 mt-4'>
      <h2 className='services-title font-semibold text-2xl py-4'>Our extra services</h2>
      <div className='services grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4'>
        <div className='service '>
          <div className="max-w-sm bg-white border border-gray-300 rounded">
            <a href="/#" className='image-holder'>
              <img className="rounded-t-lg service-image " src={srv1} alt="" />
              <FontAwesomeIcon icon={faSearch} alt='search icon' className=' absolute  bottom-0 translate-y-1/2 right-5  p-4 service-icon  ' />
            </a>
            <div className="p-4">
              <a href="/#">
                <h5 className="mb-2 font-medium text-lg tracking-tight ">Source from<br></br> Industry Hubs</h5>
              </a>
            </div>
          </div>

        </div>
        <div className='service'>
          <div className="max-w-sm bg-white border border-gray-300 rounded">
            <a href="/#" className='image-holder'>
              <img className="rounded-t-lg service-image " src={srv2} alt="" />
              <FontAwesomeIcon icon={faTags} alt='inventoryIcon' className=' absolute  bottom-0 translate-y-1/2 right-5  p-4 service-icon' />
            </a>
            <div className="p-4">
              <a href="/#">
                <h5 className="mb-2 font-medium text-lg tracking-tight ">Customize Your<br></br>Products </h5>
              </a>
            </div>
          </div>

        </div>
        <div className='service '>
          <div className="max-w-sm bg-white border border-gray-300 rounded">
            <a href="/#" className='image-holder'>
              <img className="rounded-t-lg service-image " src={srv3} alt="" />
              <FontAwesomeIcon icon={faTruckFast} alt='tags icon' className=' absolute  bottom-0 translate-y-1/2 right-5  p-4 service-icon  ' />
            </a>
            <div className="p-4">
              <a href="/#">
                <h5 className="mb-2 font-medium text-lg tracking-tight ">Fast, reliable shipping<br></br> by ocean or air </h5>
              </a>
            </div>
          </div>

        </div>
        <div className='service'>
          <div className="max-w-sm bg-white border border-gray-300 rounded">
            <a href="/#" className='image-holder'>
              <img className="rounded-t-lg service-image " src={srv4} alt="" />
              <img src={icon4} alt='security icon' className=' absolute  bottom-0 translate-y-1/2 right-5  p-4 service-icon' />
            </a>
            <div className="p-4">
              <a href="/#">
                <h5 className="mb-2 font-medium text-lg tracking-tight ">Product monitoring <br></br>and inspection</h5>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Services