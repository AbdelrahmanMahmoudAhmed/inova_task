import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {turnLoaderOn , turnLoaderOff}  from '../store/slices/global'
import PlaceHolderImage from '../assets/imges/placeholder.jpg'
import requist from '../requists/requists'







function Ebook() {

      // declare
  // const loader = useSelector((state) => state.globalSlice.loader)
  const dispatch = useDispatch();
  const { Axios } = requist();


  // states
const [ err , setErr ] = useState(false)
const [data , setData ] = useState([]);
const [available , setAvailable] = useState(false)

const { id } = useParams()



  // functions
  const getData = ( ) =>{
    dispatch(turnLoaderOn());
      Axios.get(`api/v2/storefront/products/${id}`).then((data)=>{
        setErr(false)
      console.log("data" , data.data?.data)
      setData( data.data?.data?.attributes)
      setAvailable(data.data?.data?.attributes?.available)
      console.log("available" , data.data?.data?.attributes?.available )
      dispatch(turnLoaderOff());
      }).catch((err)=>{
        dispatch(turnLoaderOff());
        setErr(true)
        console.log(err)
      })
  }

  useEffect(()=>{
    getData()
  } , [id])











  return (
    <div className=' mt-[20px] app-container'>

      { available &&(
        <>
        <div className=' mt-[20px] font-bold text-[35px]'>
          { data?.book?.title}
        </div>


        <div className=" flex gap-20 justify-between">
   
          <div>
            <img src={data?.book?.image_url}  onError={(e) => (e.target.src = PlaceHolderImage)} alt="" />
          </div>
          <div className=" w-[300px] bg-[#1f1e1e]">
            list
          </div>
        </div>
        </>
      )}


      { !available && (
        <div className=' h-[50vh] flex items-center justify-center font-bold text-[28px] flex-col' >
          <span>
          unfortunately ! this book is not available now .
            </span> 
            <span>
            please try another one 
            </span>            
        </div>
      ) }



    </div>
  )
}

export default Ebook