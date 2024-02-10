import { useContext, useEffect } from 'react';
import { DeviceContext } from '../../DeviceContext';
import moment from 'moment';
function BlogCardNew({blog,handleOnClick}) {

    const { deviceType, role }= useContext(DeviceContext);

    return (
      //Main Header Class
      <div className='text-3xl my-4 w-full h-auto 
                      flex flex-row items-start
                      justify-center cursor-pointer z-5' onClick={handleOnClick}>
            <div className='text-[10px] flex flex-col justify-center w-full'> 
                <div className='text-[20px] flex items-center my-2 font-bold'>{blog.title}</div>
                <span className='text-[14px] flex items-center my-2 tight-line-spacing'>{blog.subText}</span>
                <div className='flex flex-row items-center justify-between w-inherit max-h-[20px] my-2 opacity-50 z-0 pointer-events-none'>
                    <div className='text-[10px] flex items-center'>{"Posted on"+" "+moment(Date(blog.created_at)).format("Do MMMM YYYY")}</div>
                </div>
            </div>
      </div>
    );
}
  
export default BlogCardNew;