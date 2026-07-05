import React from 'react'

export default function OverView({ num, subtitle, ICON, divColor, iconColor }) {
    return (
        <>
            <div className='mt-2 bg-gray-100 rounded-lg border border-indigo-100'>
                <div className='flex p-2 gap-5'>
                    <div className={`p-2 h-fit w-fit rounded-lg ${divColor}`}>
                        <ICON className={iconColor} />
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>{num}</h1>
                        <h1 className='mt-2 text-sm text-gray-400 font-medium'>{subtitle}</h1>
                    </div>
                </div>

            </div>
        </>
    )
}
