import Poster1Img from '../assets/4_qsasa144.jpg';
import likeHeart from "../assets/likeHeart.svg";
import openLink from "../assets/openLink.svg";
function BlogCard() {
    return (
      //Main Header Class
      <div className='rounded-10 text-3xl h-72 my-4 w-[30%] min-w-[300px] max-w-[500px] shadow
                      flex flex-col'>
            {/* Poster Image */}
            <img src={Poster1Img} alt="poster-image" className="w-full h-[60%] opacity-50"></img>
            {/* Poster Text */}
            <div className='m-4 text-[10px] flex flex-col justify-center '> 
                <div className='flex flex-row items-center justify-between max-h-[20px] my-1 opacity-50'>
                    <div className='bg-slate-200 
                                    rounded-full p-2 px-2.5 
                                    max-h-[12px] flex items-center'>
                                        Web Development
                    </div>
                    <div className='flex flex-row items-center'>
                        <span className='max-h-[10px] flex flex-row items-center justify-end'>3.8k</span>
                        <img src={likeHeart} className='w-6 h-6 pl-1'></img>
                        <img src={openLink} className='w-6 h-6 pl-1'></img>
                    </div>
                </div>
                <div className='text-[24px] max-h-[20px] flex items-center my-1 font-bold'>History of Internet</div>
                <div className='text-[12px] max-h-[20px] opacity-50 flex items-center my-1'>The internet had humble beginnings.</div>
                <div className='text-[10px] max-h-[10px] opacity-25 flex items-center'>Dec 20, 2021</div>
            </div>
      </div>
    );
}
  
export default BlogCard;