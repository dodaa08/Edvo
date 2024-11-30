import React from 'react'

function Signin() {
    return (
        <>
                <div className="flex justify-center py-10 bg-black h-screen py-40">
            <div className='flex flex-col'>

            <div className='text-white'>
                <h1 className='text-center text-2xl font-mono'>SignIn</h1>
            </div>
            <div className='py-10  gap-5 flex flex-col '>
                <input type="text" name="" id="" placeholder='Enter your Email'  className='rounded-xl py-2 px-10'/>
                <input type="password" name="" id="" placeholder='Enter your Password' className='rounded-xl py-2 px-10' />
            </div>
            <div className='flex justify-center'>
                <button className='border-2 text-white hover:bg-white hover:text-black transition duration-200 text-l py-2 px-8 rounded-xl font-mono'>SignIn</button>
                </div>
            </div>
        </div>  
        </>   
    )
}

export default Signin
