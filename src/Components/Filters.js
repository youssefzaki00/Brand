import React from 'react';
import Categories from './Filters/Categories';
import Brands from './Filters/Brands';
import Features from './Filters/Features';
import PriceRange from './Filters/PriceRange';
import Conditions from './Filters/Conditions';
import Ratings from './Filters/Ratings';

function Filters({ categoriesNames,brandsNames , products, setUpdatedProducts }) {
  return (
    <div className='col-span-3'>
      <Categories categoriesNames={categoriesNames}/>
      {brandsNames.length > 0 && <Brands brandsNames={brandsNames} />}

      <Features />
      <PriceRange products={products} setUpdatedProducts={setUpdatedProducts }/>
      <Conditions />
      <Ratings/>
    </div>
  );
}

export default Filters;
