import React from 'react';

const Sidebar = ({ selection, setSelection }) => {
  return (
    <>
      <div className='w-1/3 flex items-center flex-col justify-center bg-green-400 h-full'>
        <h3 className='h-10 bg-white' onClick={() => setSelection("Home")}>POSTS</h3>
        <h3 className='h-10 mt-2 bg-white' onClick={() => setSelection("Create Posts")}>CREATE POSTS</h3>
      </div>
    </>
  );
}

export default Sidebar;
