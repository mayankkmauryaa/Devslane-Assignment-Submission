import React, { useState } from 'react'

const Table = () => {
    const [num, setNum] = useState(2);
    function submitHandle() {
        setNum(num + 1);
    }
    return (
        <div className='text-indigo-500 text-2xl font-bold m-4 space-y-4'>
            <button onClick={submitHandle} className='text-white bg-indigo-600 px-3 py-1 border rounded-lg'>Next</button>
            <div>{num} x 1 = {num * 1}</div>
            <div>{num} x 2 = {num * 2}</div>
            <div>{num} x 3 = {num * 3}</div>
            <div>{num} x 4 = {num * 4}</div>
            <div>{num} x 5 = {num * 5}</div>
            <div>{num} x 6 = {num * 6}</div>
            <div>{num} x 7 = {num * 7}</div>
            <div>{num} x 8 = {num * 8}</div>
            <div>{num} x 4 = {num * 9}</div>
            <div>{num} x 10 = {num * 10}</div>
        </div>
    )
}

export default Table