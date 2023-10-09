function SubHeader() {
    return (
      //Main Header Class
      <div className='text-3xl h-12 p-1
                      fixed top-0 left-0 w-full z-10
                      bg-blue-600 shadow
                      flex items-center justify-between'>
          <img src={LogoTransparent} alt="logo" className='w-8 h-8 ml-4'></img>
          <img src={UserLogoWhite} alt="logo" className='w-6 h-6 mr-4'></img>
      </div>
    );
  }
  
  export default SubHeader;
  