import React from 'react'
import { Link , useNavigate } from 'react-router-dom'


function NotFound() {
    // const navigate = useNavigate()
  return (

<div className=''>
  <div>
    <div className="sm:app-container flex justify-center">
      <div
        className=" rounded-3xl my-[60px] pt-[50px] pb-[50px] px-8 "
      >
      <div className="  min-h-[40vh] py-[40px] flex flex-col gap-4 md:gap-10 text-center">
        <div>
          <span className='text-[70px]'>404</span>
        </div>


        <h1 className="text-center font-bold text-[22px]  xs:text-[26px] sm:text-[32px] md:text[36px] ">
        something went wrong !
        </h1>

        <div className="flex justify-center">
          <Link to="/" className="px-4 py-2 rounded-lg text-[14px] sm:text-[16px] md:text-[20px] boxShadow-3xl border   " >
          To home page
          </Link>
        </div>
              </div>
      </div>
    </div>
  </div>
</div>





    
//     <div classNameName='h-full flex justify-center items-center'>
//     <div classNameName='text-red'>Page not found</div>
//     <div classNameName=' mt-4'>
// <button onClick={ ()=> navigate('/')} >to Home page</button>
    
// </div>
// <div>
// <button onClick={ ()=> navigate(-1)} >go back</button>

// </div>
//     </div>
  )
}

export default NotFound