import React, { useState } from 'react';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="flex justify-center py-10 bg-black h-screen py-40">
            <div className='flex flex-col'>

            <div className='text-white'>
                <h1 className='text-center text-2xl font-mono'>SignUp</h1>
            </div>
            <div className='py-10  gap-5 flex flex-col '>
                <input type="text" name="" id="" placeholder='Enter your Email'  className='rounded-xl py-2 px-10'/>
                <input type="password" name="" id="" placeholder='Enter your Password' className='rounded-xl py-2 px-10' />
                <input type="text" placeholder='Enter your FirstName: ' className='rounded-xl py-2 px-10' />
                <input type="text"  placeholder='Enter your Lastname: ' className='rounded-xl py-2 px-10'/>
            </div>
            <div className='flex justify-center'>
                <button className='border-2 text-white hover:bg-white hover:text-black transition duration-200 text-l py-2 px-8 rounded-xl font-mono' onClick={handleSubmit}>SignUp</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;