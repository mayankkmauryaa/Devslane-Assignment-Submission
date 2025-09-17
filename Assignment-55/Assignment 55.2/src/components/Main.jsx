import React from 'react'
import Card from './Card'

const Main = () => {
return (
    <div className='bg-white my-12 mx-32 py-12 px-16'>
        <div className='flex justify-end mr-2'>
            <select className='bg-gray-100 py-1 pl-1 pr-10 text-gray-700 text-sm border border-gray-300'>
                <option>Default sorting</option>
                <option>Coffee Mug</option>
                <option>Tshirt</option>
                <option>Jeans</option>
                <option>SmartPhone</option>
            </select>
        </div>
        <main className='flex flex-wrap mt-8 gap-4'>
            <Card img="https://static1.pocketnowimages.com/wordpress/wp-content/uploads/2023/09/pbi-iphone-15-plus.png" type="SmartPhone" title="Apple iPhone 15" price="₹64900" />
            <Card img="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/8/w/5/-original-imah4jyfwr3bfjbg.jpeg?q=70&crop=false" type="SmartPhone" title="Apple iPhone 16" price="₹74900" isSale={true} />
            <Card img="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70&crop=false" type="SmartPhone" title="Apple iPhone 15 Plus" price="74900" />
            <Card img="https://www.fnp.com//images/pr/l/v20200423195637/saasu-maa-special-printed-mug_1.jpg" type="Mug" title="Sasu Maa Special Coffee Mug" price="₹349" isSale={true} />
            <Card img="https://www.fnp.com//images/pr/l/v20201009022733/forever-always-printed-mug-hand-delivery_1.jpg" type="Mug" title="Forever Always Printed Coffee Mug" price="₹349" isSale={true} />
            <Card img="https://rukminim2.flixcart.com/image/612/612/xif0q/mug/m/z/x/teal-gold-milk-cup-glossy-finish-stoneware-ceramic-cup-real-gold-original-imah9j3exmgxstb9.jpeg?q=70" type="Mug" title="Teal Milk Mug" price="₹799" />
            <Card img="https://rukminim2.flixcart.com/image/612/612/xif0q/jean/s/r/l/28-jean-slim-003-noah-original-imah52sybrszhgyu.jpeg?q=70" type="Jeans" title="Men Jogger Fit Jeans" price="₹499" />
            <Card img="https://rukminim2.flixcart.com/image/612/612/xif0q/jean/n/s/w/38-rdm1104-red-tape-original-imagxqhnkfhzkgfp.jpeg?q=70" type="Jeans" title="Men Regular Jeans" price="₹899" isSale={true} />
            <Card img="https://rukminim2.flixcart.com/image/612/612/xif0q/jean/p/r/l/36-baggy-jeans-zaba-denim-original-imahbgvgxen3jm6u.jpeg?q=70" type="Jeans" title="Men Straight Fit Jeans" price="₹799" />
        </main>
        <div className='flex mt-6 gap-1 mb-6'>
            <button className='px-3 py-1 border border-orange-500 text-white bg-orange-500 '>1</button>
            <button className='px-3 py-1 border border-orange-500 text-orange-500 '>2</button>
            <button className='w-8 h-8 py-4 flex items-center justify-center border border-orange-500'>
                <img
                    className='w-4 h-4'
                    src="https://static.vecteezy.com/system/resources/previews/017/785/202/large_2x/right-arrow-icon-on-transparent-background-free-png.png"
                    alt="arr"
                />
            </button>
        </div>
    </div>
)
}

export default Main