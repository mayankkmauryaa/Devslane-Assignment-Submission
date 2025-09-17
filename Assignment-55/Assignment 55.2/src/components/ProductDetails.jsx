import React from 'react'

const ProductDetails = () => {
  return (
    <div className='class="bg-[#F4F5F6]"'>
        <div className="flex px-8 py-6 bg-white mx-[40px] my-[80px]">
      <img className='h-[400px]' src="https://codeyogi.io/coffee-mug.jpeg" alt="img"/>
      <div className="ml-8 space-y-4">
        <h1 className="text-2xl font-bold text-[#415160]">
          Black Printed Coffee Mug
        </h1>
        <p className="text-xl font-bold text-[#415160]">
          $15.00
        </p>
        <p className="text-[#415160]">
          Floralis gets to you premium Coffee Mugs for a positive and bright mornings. These Mugs are also perfect for tea or hot chocolate for those cold winter nights. 
        </p>
        <input type="text" placeholder='1' className='border-[1.5px] mr-1 px-2 w-10 border-gray-400' />
        <button className="bg-[#FF5151] border-[1px] border-[#FF5151] text-white px-4 py-1 rounded text-sm">
          ADD TO CART
        </button>
      </div>
    </div>
    </div>
  )
}

export default ProductDetails