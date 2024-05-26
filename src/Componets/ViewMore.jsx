import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { getMovieById } from '../Api-Helpers/Api-helpers';

const ViewMore = () => {



  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('data');
const [movi, setMovi] = useState([])
console.log(id);
useEffect(()=>{
         getMovieById(id).then((result)=>{
          console.log(result.movie);
          setMovi(result.movie)
         })
},[])
const releaseDate = movi ? new Date(movi.releaseDate).toLocaleDateString() : "";

const navigate=useNavigate()
const seatBooking=(movieName)=>{
  navigate(`/seatbooking?data=${encodeURIComponent(movieName)}`);
}

  return (
    <div class='w-full  dark:bg-gray-900  mx-auto'>
    <div class=' justify-center align-middle items-center flex pt-10 pb-10 ' >
      
<a href="#" class="flex p-5  flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover rounded-3xl h-[30rem] w-96    md:w-auto " src={movi ?movi.posterUrl :""} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="m text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movi ? movi.title :""}</h5>
       <div class='flex gap-2 mt-2 mb-3'>
        <button class='text-white bg-red-600 px-5 py-1  rounded-2xl'>{movi.playTime}</button>
       
        </div> 
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{movi ? movi.description :''}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Release Date: {movi ? movi.releaseDate:""}</p>
       
       
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Director: {movi ? movi.director : ""}</p>
        
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Production: {movi.production &&movi.production.map((obj)=>{
    return(
      <span>{obj} ,</span>
    )
  })} </p>


  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Actors: {movi.actors && movi.actors.map((obj)=>{
    return(
      <span>{obj} ,</span>
    )
  })} </p>
       
       <button onClick={()=>seatBooking(movi && movi.title)} class='text-white bg-red-600 px-5 py-2  w-[20rem] rounded-2xl'>Book Your Seat</button> 
      
      
    </div>
</a>

    </div>
    </div>
  )
}

export default ViewMore
