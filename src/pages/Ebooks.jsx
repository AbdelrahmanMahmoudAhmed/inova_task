import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {turnLoaderOn , turnLoaderOff}  from '../store/slices/global'
import PlaceHolderImage from '../assets/imges/placeholder.jpg'
import Durrah from '../assets/imges/durrah.jpg'
import requist from '../requists/requists'


// components

import BooksItem from '../components/books/BooksItem'






function Ebooks() {


      // declare
  // const loader = useSelector((state) => state.globalSlice.loader)
  const dispatch = useDispatch();
  const { Axios } = requist();


  // states
const [ err , setErr ] = useState(false)
const [data , setData ] = useState([]);




  // functions
  const getData = ( ) =>{
    dispatch(turnLoaderOn());
      Axios.get('api/v2/storefront/products?page=1&per_page=10&filter[sub_product_type]=book&filter[taxons]=All').then((data)=>{
        setErr(false)
      console.log("data" , data.data?.data)
      setData( data.data?.data)
      dispatch(turnLoaderOff());
      }).catch((err)=>{
        dispatch(turnLoaderOff());
        setErr(true)
        console.log(err)
      })
  }

  useEffect(()=>{
    getData()
  } , [])

  return (
    <div>
        
        <div className=' mt-[20px]'  >
            <div className=' flex flex-wrap gap-6 app-container'>
                { data?.length && data.map((item)=>(
                <BooksItem info={ item?.attributes?.book } curr={item?.attributes?.currency}  price={item?.attributes?.compare_at_price} />

                )) }
            </div>
        </div>


        { (err && !data.length) && ( 
              <div className='h-[80vh] app-container flex items-center justify-center '>
               <span className=' text-[62px] font-bold'> There is a problem obtaining data </span> 
              </div>
            )  }
    </div>
  )
}

export default Ebooks