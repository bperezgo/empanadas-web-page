import React from 'react';
import { Product } from '../Product';

export const ProductList = () => {
  return (
    <div>
      {[1, 2, 3].map(() => (
        <Product />
      ))}
    </div>
  );
};
