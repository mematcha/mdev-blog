import funnelLogo from '../assets/funnelLogo.svg';
import searchLogo from '../assets/searchLogo.svg';

function MainSearch() {
    return (
      //Main Header Class
      <div className='text-3xl h-12 my-12 mb-16 min-w-[200px]
                      rounded-lg
                      bg-slate-100 shadow
                      flex items-center justify-between'>
          {/* Logo */}
          <input type="text" className='bg-transparent 
                                        w-[100%] m-12 ml-6 
                                        outline-none text-14'></input>
          <div className='flex flex-row justify-end'>
            <img src={funnelLogo} className='w-4 h-4 opacity-30 mx-2'></img>
            <img src={searchLogo} className='w-4 h-4 opacity-30 ml-2 mr-4'></img>
          </div>
      </div>
    );
  }
  
  export default MainSearch;