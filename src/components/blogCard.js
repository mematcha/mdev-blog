import { useContext, useEffect } from 'react';
import Poster1Img from '../assets/4_qsasa144.jpg';
import { DeviceContext } from '../DeviceContext';

function BlogCardNew({handleOnClick}) {

    const deviceContextVal= useContext(DeviceContext);

    return (
      //Main Header Class
      <div className='text-3xl my-4 w-full h-auto 
                      flex flex-row items-start
                      justify-center cursor-pointer' onClick={handleOnClick}>
            {/* Poster Image */}
            {/* <img src={Poster1Img} 
                 alt="poster-image" 
                 className={`max-w-32 max-h-32 w-24 h-24 opacity-50  items-start
                 ${deviceContextVal=='mobile'?'hidden':''}`}>

            </img> */}
            {/* Poster Text */}
            <div className='text-[10px] flex flex-col justify-center w-full'> 
                <div className='text-[20px] flex items-center my-2 font-bold'>Animating Multi-Page Navigations with Browser View Transitions and Astro</div>
                <div className='flex flex-row items-center justify-between w-inherit max-h-[20px] my-2 opacity-50'>
                    <div className='text-[10px] flex items-center'>Dec 20, 2021</div>
                </div>
            </div>
      </div>
    );
}
  
export default BlogCardNew;