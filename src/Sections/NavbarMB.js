import React, { useEffect, useState } from 'react'

function NavbarMB() {
    const category = [
    'Clothes',
    'interiors',
    'tech',
    'Tools',
    'equipments',
    'Sports',
    'pets',
    'More category',
];
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(category)
  }, []);
  return (
    <div className='bg-white w-full overflow-hidden'>
    <div className='flex xl:hidden bg-white container mx-auto px-4 py-6'>
    {
      categories.map((category) => {
        return (
          <button type="button" key={category} className="bg-gray-50 text-blue-600 
        hover:text-gray-50 border border-gray-200
        hover:bg-blue-600  focus:outline-none
        rounded-md text-sm
        px-2 py-2 text-center mr-2 mb-2">
                {category}
              </button>
              )
            })
          }
          </div>
          </div>
  );
}

export default NavbarMB