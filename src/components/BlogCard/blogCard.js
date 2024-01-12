import { useContext, useEffect } from 'react';
import { DeviceContext } from '../../DeviceContext';

function BlogCardNew({blog,handleOnClick}) {

    const deviceContextVal= useContext(DeviceContext);

    return (
      //Main Header Class
      <div className='text-3xl my-4 w-full h-auto 
                      flex flex-row items-start
                      justify-center cursor-pointer' onClick={handleOnClick}>
            <div className='text-[10px] flex flex-col justify-center w-full'> 
                <div className='text-[20px] flex items-center my-2 font-bold'>{blog.title}</div>
                <div className='flex flex-row items-center justify-between w-inherit max-h-[20px] my-2 opacity-50'>
                    <div className='text-[10px] flex items-center'>{blog.date}</div>
                </div>
            </div>
      </div>
    );
}
  
export default BlogCardNew;