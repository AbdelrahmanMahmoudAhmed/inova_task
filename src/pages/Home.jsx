import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {turnLoaderOn , turnLoaderOff}  from '../store/slices/global'
import PlaceHolderImage from '../assets/imges/placeholder.jpg'
import Durrah from '../assets/imges/durrah.jpg'
import requist from '../requists/requists'




function Home() {
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
      Axios.get('/about').then((data)=>{
        setErr(false)
      console.log("data" , data.data)
      setData( data.data?.data)
      dispatch(turnLoaderOff());
      }).catch((err)=>{
        dispatch(turnLoaderOff());
        setErr(true)
      })
  }



  // getting data
  useEffect(()=>{
    getData();
  },[])

  return (
    <div >

      <div className=' '>

            { !err && (
              <div>

            Home page
  
            <img src={`https://amf-backend.hmaserv.online/storage/offers/1698149873Banner2.png`} onError={(e) => (e.target.src = PlaceHolderImage)} alt="" />
            <div>
            </div>
              </div>
            ) }

            { (err && !data.length) && ( 
              <div className='h-[80vh] app-container flex items-center justify-center '>
               <span className=' text-[62px] font-bold'> There is a problem obtaining data </span> 
              </div>
            )  }
      </div>

    </div>
  )
}

export default Home