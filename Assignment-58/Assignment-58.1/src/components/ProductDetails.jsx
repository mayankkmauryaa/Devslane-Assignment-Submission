import React from 'react';
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link, useParams } from 'react-router-dom';
import allData from './Data';

const ProductDetails = () => {
  const { id } = useParams();
  const product = allData.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-8 text-center text-red-500">
        Product not found.
      </div>
    );
  }

  return (
    <div className="bg-[#f1a4b2]">
      <Link to="/" className="text-3xl text-[#FF5151] flex items-center gap-2 ml-8 mt-4 p-8">
        <FiArrowLeftCircle /> Back
      </Link>
      <div className="flex flex-col sm:flex-row mx-[20px] gap-4 px-8 py-6 bg-white sm:mx-[80px] mb-[40px] mt-[10px]">
        <img className="sm:h-[400px] h-[280px]" src={product.img} alt={product.title} />
        <div className="ml-8 space-y-4">
          <h1 className="text-2xl font-bold text-[#415160]">{product.title}</h1>
          <p className="text-xl font-bold text-[#415160]">₹{product.price}</p>
          <p className="text-[#415160]">{product.description}</p>
          <input type="number" defaultValue={1} className="border-[1.5px] mr-1 px-2 w-14 border-gray-400" />
          <button className="bg-[#FF5151] border-[1px] border-[#FF5151] text-white px-4 py-1 rounded text-sm">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
