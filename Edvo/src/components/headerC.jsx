import React from 'react'
import { Link } from 'react-router-dom'

function HeaderC() {
    return (
        <>
        <div>
            <div className='flex justify-between ml-12'>
                <Link to="/"> 
                <div className='gap-5 py-5 px-5'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrGRIGnPcbJOyVzWtOTGyDpCQdKeuViQtLuw&s" alt=""  className='h-10 rounded-xl'/>
                </div>
                </Link>
                <div className='flex gap-10 py-7'>
                    <Link to="/about">
                    <button className='text-xl font-mono'>About Us</button>
                    </Link>
                    <Link to="/courses">
                    <button className='text-xl font-mono'>View Courses</button>
                    </Link>
                    <button className='text-xl font-mono'>Contact Us</button>
                </div>

                <div className='flex gap-10 py-5'>
                    <Link to="/signin">
                    <button className='border-2 border-black rounded-xl py-2 px-5'>SignIn</button>
                    </Link>
                    <Link to="/signup">
                    <button className='border-2 border-black rounded-xl py-2 px-5 text-white bg-black hover:bg-blue-800 transition duration-200'>SignUp</button>
                    </Link>
                </div>
                <div>

                </div>

            </div>
        </div>
        </>
    )
}

export default HeaderC
