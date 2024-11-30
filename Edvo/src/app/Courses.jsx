import React from 'react'
import HeaderC from '../components/headerC'
import Sidebar from '../components/Sidebar'

function Courses() {
    return (
     <>
     <HeaderC />
     <div>
        <div className='flex '>
        <div className=''>
            <Sidebar />
        </div>
        <div className='py-5 px-40 justify-center align-center items-center'>
            <div className='flex justify-center flex-grow'>
            <input type="search" placeholder='Search for anything' className='border-2 py-3 w-96 px-10 rounded-xl'/>
            </div>


            <div className='flex flex-grow py-5 gap-10 px-10'>
                <div className='border-4 px-5 py-2 rounded-xl'>
                    <div className='flex justify-center align-center items-center'>

                    <img src="https://i.pinimg.com/736x/27/65/94/2765941af73ff4ff98581d9100a01e53.jpg" alt="" className='h-40 mt-2 '/>
                    </div>
                    <div className='border-b'>

                    <h1 className='text-xl text-black font-mono mt-5 border-b'>Learn Personality Development</h1>
                    </div>
                    <h1 className='text-l text-black font-mono mt-5 text-center '>Will gureantee to finish the <br /> under confidence in you come <br /> let's grow together.</h1>
                    <div className='flex justify-center py-5'>
                        <button className='border-2 border-black rounded-xl py-2 px-5 text-white bg-black hover:bg-red-800 transition duration-200'>Buy</button>
                    </div>
                </div>

                <div className='border-4 px-5 py-2 rounded-xl'>
                    <div className='flex justify-center align-center items-center'>

                    <img src="https://i.pinimg.com/736x/93/44/9a/93449acdf489fad3d205bb76583608cb.jpg" alt="" className='h-40 mt-2 '/>
                    </div>
                    <div className='border-b'>

                    <h1 className='text-xl text-black font-mono mt-5 border-b'>Lets Learn MERN together</h1>
                    </div>
                    <h1 className='text-l text-black font-mono mt-5 text-center '>Will gureantee to finish MERN <br /> Will Work on Real world Projects <br /> let's grow together.</h1>
                    <div className='flex justify-center py-5'>
                        <button className='border-2 border-black rounded-xl py-2 px-5 text-white bg-black hover:bg-red-800 transition duration-200'>Buy</button>
                    </div>
                </div>
            </div>

        </div>

       
        
        </div>
     </div>
     </>   
    )
}

export default Courses
