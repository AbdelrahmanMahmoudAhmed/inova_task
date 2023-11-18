import React from 'react'
import Pic from  '../../assets/imges/inova.svg'

function Loader() {
  return (
    <div
    className="flex justify-center items-center fixed h-[100vh] w-[100vw] top-0 left-0 z-[999999] bg-[]"
  >
    <div className=' absolute top-0 left-0 h-full w-full flex justify-center items-center '>
      <div className='bg-[#eeeeee38] z-20  absolute top-0 left-0 h-full w-full'></div>
      <img src='http://bigramyweb.inovaeg.com/static/media/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg' alt=""  className=' w-[80%] md:w-[40%] '/>
    </div>
    <div
      className="w-12 aspect-square rounded-full border-4 border-[#DBDBDB] border-t-first animate-spin relative z-40"
    ></div>
  </div>
  )
}

export default Loader