import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar lg:flex md-flex flex-wrap justify-between items-center px-5 bg-black py-4 shadow-md'>
        <div className='logo flex items-center gap-5 justify-center'>
        <img className='w-14 rounded-xl' src='https://images.unsplash.com/photo-1627873649417-c67f701f1949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdmllJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' />
            <h2 className='font-bold text-2xl text-white'>MovieAPP</h2>
        </div>
        <div className='menu text-white font-bold justify-center'>
            <ul className='flex justify-center space-x-4 '>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Services</li>
                <li className='cursor-pointer'>Contacts</li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar