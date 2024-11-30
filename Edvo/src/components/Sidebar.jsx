// components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
function Sidebar() {
    return (
        <div className='w-64 h-screen bg-gray-80 text-black border-b border-4  flex flex-col'>
            <div className='p-5 border-b border-gray-700'>
                <h2 className='text-xl font-bold'>Filter the Courses</h2>
            </div>
            <ul className='flex flex-col py-5 gap-5'>
                <div className='flex justify-evenly gap-4 '>
                <Link><button className='border-2 py-2 px-5 rounded-xl'>Android </button> </Link>
                <Link><button className='border-2 py-2 px-5 rounded-xl'>Fullstack</button> </Link>

                </div>
                <div className='flex justify-evenly gap-4 '>
                <Link><button className='border-2 py-2 px-5 rounded-xl'>DSA</button> </Link>
                <Link><button className='border-2 py-2 px-5 rounded-xl'>System D</button> </Link>

                </div>

                <div className='flex justify-evenly gap-4 '>
                <Link><button className='border-2 py-2 px-5 rounded-xl'>Web3 </button> </Link>
                <Link><button className='border-2 py-2 px-5 rounded-xl'>Rust</button> </Link>

                </div>
            </ul>
        </div>
    );
}

export default Sidebar;
