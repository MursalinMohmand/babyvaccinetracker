import React from 'react'
import BabyImage from '../assets/baby.png'

export default function Empty() {
    return (
        <>
            <div className='flex-col flex h-[calc(100vh-200px)]  bg-white  items-center justify-center'>
                <img className='w-60 rounded-full animate-bounce [animation-duration:3s]' src={BabyImage} alt="" />
                <div className='w-70 text-center'>
                    <h1 className='font-semibold text-indigo-600'>No Babies Added Yet</h1>
                    <h1 className='text-gray-400'>
                        Start tracking your baby's vaccination
                        schedule by adding your first baby.</h1>
                </div>
            </div>
        </>
    )
}
