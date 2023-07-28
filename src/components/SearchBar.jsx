import React from 'react'

const SearchBar = () => {
  return (
   <div>
    <div className='main mt-5 flex justify-center'>
<input className='bg-gray-100 placeholder-gray-500 outline-none px-7 py-1 border-rounded-sm' type='text' placeholder='Search Here'>
</input>
<button className='bg-black text-white px-4 py-1 rounded-sm'>
    Search
</button>
    </div>
   </div>
  )
}

export default SearchBar