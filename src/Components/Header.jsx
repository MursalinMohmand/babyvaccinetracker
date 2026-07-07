import { ScanHeart } from 'lucide-react'
import React from 'react'

export default function Header({ ModelClick }) {
    return (
        <div className='w-full flex fixed z-10 bg-white top-0 justify-between shadow-md py-3 px-4'>
            <div className='flex text-indigo-600 items-center gap-5'>
                <ScanHeart size={40} />
                <h1 className='font-semibold'>Baby Vaccine Tracker</h1>
            </div>

            <button onClick={() => {
                ModelClick()
            }} className='bg-indigo-600 hover:bg-indigo-800 cursor-pointer text-white px-3 py-2 rounded-lg'>Add Baby +</button>
        </div>
    )
}
