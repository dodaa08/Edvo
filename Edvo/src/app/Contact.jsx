import React from 'react'

function Contact() {
    return (
        <>
        <div className='flex justify-evenly py-20 '>

            <div className=''>
                 <h1 className='text-2xl font-mono text-center'>Contact Us</h1>

                 <div className='flex flex-col py-12 gap-5'> 
                    <input type="text" placeholder='Name' className='border-b rounded-l border-2   px-10 py-2'/>
                    <input type="text" placeholder='Email' className='border-b rounded-l border-2  px-10 py-2 '/>
                    <input type="text" placeholder='Message' className='border-b rounded-l border-2  px-10 py-2 '/>
                 </div>
                 <div className='flex justify-center '>
                    <button className='border-2 border-black rounded-xl py-2 px-8 text-white bg-black hover:bg-blue-800 transition duration-200'>Send</button>
                 </div>
            </div>      

        </div>
        </>
    )
}

export default Contact
