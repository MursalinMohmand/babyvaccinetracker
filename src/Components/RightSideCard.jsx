import React from 'react'
import babyimage from '../assets/baby.png'

import OverView from './OverView'
import { Syringe, UsersRound } from 'lucide-react'

export default function RightSideCard({ babyList }) {
    return (
        <>
            <div>
                <div className='flex items-center h-52 justify-center'>
                    <img className='w-40' src={babyimage} alt="" />
                </div>
                <h1 className='mt-5 text-xl text-center font-semibold'>Welcome to baby Vaccine Tracker</h1>
                <h1 className='text-center mt-3 text-gray-400'>Select the baby from the above to view there vaccination schedual, progress detail </h1>
                <div>
                    <h1 className='mt-3 font-semibold text-indigo-600'>Overview</h1>

                    <div>

                        <OverView iconColor={'text-indigo-600'} divColor={'bg-indigo-100'} subtitle={'Total babies'} ICON={UsersRound} num={babyList.length} />
                        <OverView iconColor={'text-orange-600'} divColor={'bg-orange-100'} subtitle={'Pendding Vaccines'} ICON={Syringe} num={3} />

                    </div>
                </div>
            </div>
        </>
    )
}
