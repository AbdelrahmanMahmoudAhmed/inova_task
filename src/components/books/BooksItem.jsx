import React, { useEffect } from 'react'
import PlaceHolderImage from '../../assets/imges/placeholder.jpg'
import { Link } from 'react-router-dom'

function BooksItem({info , curr , price}) {

    useEffect(()=>{
        console.log("info" , info)
    },[])
  return (
    <div className='bg-[#1f1e1e] w-[300px] h-[500px] flex flex-col gap-2 p-2 ' >

        <div className=' flex-1'>
            <img className='h-full object-cover' src={info?.image_url} onError={(e) => (e.target.src = PlaceHolderImage)} alt="" />
        </div>

        <div>
                <div className=' text-bold'>
                { info?.title }

                </div>

                        <span>{curr}</span>
                        <span className='font-bold text-[38px] mx-5'>{price}</span>
                <div>

                </div>

        </div>

        <div className=' text-center'>

            <Link className=' block !bg-first  my-7 text-[26px] text-center' to={`/books/${info?.id}`} >Show Details</Link>

        </div>
        
        
    </div>
  )
}

export default BooksItem